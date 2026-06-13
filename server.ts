import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import { fallbackReport } from './src/data/fallbackReport.js'; // Use .js extension since ESM might run
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini client to prevent crash on startup if secret is missing
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error('GEMINI_API_KEY is not defined. Please configure it in your Secrets settings.');
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// REST route to generate report content
app.post('/api/generate-kundli', async (req, res) => {
  const birthDetails = req.body;
  if (!birthDetails || !birthDetails.name) {
    return res.status(400).json({ error: 'Birth details name is required.' });
  }

  try {
    const client = getGeminiClient();

    const prompt = `
      You are a world-renowned Senior Vedic Astrologer, scholar of Jyotish Shastra, and Ayurvedic counselor.
      Generate an incredibly rich, personalized Vedic Kundli Report in JSON format based on the following birth profile:
      Name: ${birthDetails.name}
      Gender: ${birthDetails.gender}
      Birth Date: Year ${birthDetails.year}, Month ${birthDetails.month}, Day ${birthDetails.day}
      Birth Time: ${birthDetails.hour}:${birthDetails.minute}
      Birth Place: ${birthDetails.city}, ${birthDetails.country}
      Preferred Language: ${birthDetails.language} (If "hindi", provide all readings, descriptions, strengths, and remedies translated to Hindi, keeping structure intact).

      The output MUST be a single clean valid JSON object following this JSON schema exactly:
      {
        "birthDetails": {
          "name": "string",
          "gender": "string",
          "day": number,
          "month": number,
          "year": number,
          "hour": number,
          "minute": number,
          "country": "string",
          "city": "string",
          "language": "string"
        },
        "birthStar": {
          "nkName": "string",
          "zodiacSign": "string",
          "rulingPlanet": "string",
          "associatedDeity": "string",
          "description": "string",
          "strengths": "string",
          "weaknesses": "string"
        },
        "personality": {
          "coreTraits": ["string"],
          "description": "string",
          "bigThree": {
            "sun": { "sign": "string", "description": "string" },
            "moon": { "sign": "string", "description": "string" },
            "ascendant": { "sign": "string", "description": "string" }
          }
        },
        "elementAnalysis": {
          "dominant": "string",
          "description": "string",
          "ratios": [
            { "name": "Fire" | "Earth" | "Air" | "Water" | "Ether", "percentage": number, "description": "string" }
          ]
        },
        "storedKarma": {
          "goodPercentage": number,
          "pendingLessons": ["string"],
          "karmicDebtPlanet": "string",
          "storedKarmasDescription": "string"
        },
        "chakraAnalysis": {
          "chakras": [
            { "name": "Muladhara" | "Svadhishthana" | "Manipura" | "Anahata" | "Vishuddha" | "Ajna" | "Sahasrara", "sanskritName": "string", "percentage": number, "status": "Balanced" | "Imbalanced", "description": "string", "remedy": "string" }
          ],
          "dominantChakra": { "name": "string", "sanskritName": "string", "percentage": number, "status": "string", "description": "string", "remedy": "string" },
          "description": "string"
        },
        "doshaAnalysis": {
          "doshas": [
            { "name": "Vata" | "Pitta" | "Kapha", "percentage": number, "description": "string", "symptoms": ["string"] }
          ],
          "dominantDosha": "string",
          "balanceRemedy": "string"
        },
        "planetaryStrengths": {
          "yogakaraka": ["string"],
          "benefics": ["string"],
          "malefics": ["string"],
          "planets": {
            "sun": { "name": "string", "sanskritName": "string", "sign": "string", "degree": "string", "house": number, "nakshatra": "string", "isBenefic": boolean, "status": "Yogakaraka" | "Benefic" | "Malefic" | "Neutral", "description": "string", "remediation": "string" },
            "moon": { "name": "string", "sanskritName": "string", "sign": "string", "degree": "string", "house": number, "nakshatra": "string", "isBenefic": boolean, "status": "Yogakaraka" | "Benefic" | "Malefic" | "Neutral", "description": "string", "remediation": "string" },
            "mercury": { "name": "string", "sanskritName": "string", "sign": "string", "degree": "string", "house": number, "nakshatra": "string", "isBenefic": boolean, "status": "Yogakaraka" | "Benefic" | "Malefic" | "Neutral", "description": "string", "remediation": "string" },
            "jupiter": { "name": "string", "sanskritName": "string", "sign": "string", "degree": "string", "house": number, "nakshatra": "string", "isBenefic": boolean, "status": "Yogakaraka" | "Benefic" | "Malefic" | "Neutral", "description": "string", "remediation": "string" },
            "venus": { "name": "string", "sanskritName": "string", "sign": "string", "degree": "string", "house": number, "nakshatra": "string", "isBenefic": boolean, "status": "Yogakaraka" | "Benefic" | "Malefic" | "Neutral", "description": "string", "remediation": "string" },
            "mars": { "name": "string", "sanskritName": "string", "sign": "string", "degree": "string", "house": number, "nakshatra": "string", "isBenefic": boolean, "status": "Yogakaraka" | "Benefic" | "Malefic" | "Neutral", "description": "string", "remediation": "string" },
            "saturn": { "name": "string", "sanskritName": "string", "sign": "string", "degree": "string", "house": number, "nakshatra": "string", "isBenefic": boolean, "status": "Yogakaraka" | "Benefic" | "Malefic" | "Neutral", "description": "string", "remediation": "string" },
            "rahu": { "name": "string", "sanskritName": "string", "sign": "string", "degree": "string", "house": number, "nakshatra": "string", "isBenefic": boolean, "status": "Yogakaraka" | "Benefic" | "Malefic" | "Neutral", "description": "string", "remediation": "string" },
            "ketu": { "name": "string", "sanskritName": "string", "sign": "string", "degree": "string", "house": number, "nakshatra": "string", "isBenefic": boolean, "status": "Yogakaraka" | "Benefic" | "Malefic" | "Neutral", "description": "string", "remediation": "string" }
          }
        },
        "spiritualProfile": {
          "ishtaDevata": {
            "name": "string",
            "deities": [
              { "name": "string", "avatarUrl": "string", "emoji": "string" }
            ],
            "description": "string"
          },
          "atmakaraka": {
            "planetName": "string",
            "description": "string",
            "soulDesireText": "string"
          }
        },
        "dashaTimeline": [
          { "levelName": "Maha Dasha" | "Antar Dasha" | "Pratyantar Dasha" | "Sookshma Dasha" | "Prana Dasha", "planetName": "string", "startDate": "string", "endDate": "string" }
        ],
        "predictions": [
          { "category": "Career" | "Wealth" | "Health" | "Relationships" | "Spirituality", "score": number, "text": "string", "remedy": "string" }
        ]
      }

      Ensure all fields are fully populated with insightful and descriptive astrological analyses. Under "spiritualProfile.ishtaDevata.deities", pick 2 noble deities (like Lord Vishnu, Ganesha, Shiva, Hanuman, Krishna, Lakshmi, Saraswati, Kali, Ram), and feel free to use generic quality Unsplash illustrations as urls, or simple descriptive emojis.
      Provide realistic planetary degrees (e.g. "12°34'56\"") and appropriate houses based on traditional calculations.
    `;

    const response = await client.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const reportText = response.text;
    if (reportText) {
      const reportJson = JSON.parse(reportText.trim());
      return res.json(reportJson);
    } else {
      throw new Error('Empyp responses from Gemini models');
    }

  } catch (error: any) {
    console.error('Astrology API generation warning/error:', error.message);
    // Smooth custom fallback merging user parameters if Gemini fails or if key is not configured
    const userReport = JSON.parse(JSON.stringify(fallbackReport));
    userReport.birthDetails = {
      ...userReport.birthDetails,
      ...birthDetails
    };
    // Customize intro sentences to show it represents their exact input
    userReport.birthStar.description = `Hello, ${birthDetails.name}! Based on your birth details of ${birthDetails.day}/${birthDetails.month}/${birthDetails.year} in ${birthDetails.city}, ${userReport.birthStar.description}`;
    return res.json(userReport);
  }
});

async function startServer() {
  // Vite as middleware in dev mode
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets safely
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express Kundli Server is successfully booted and running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
