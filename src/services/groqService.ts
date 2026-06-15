import Groq from 'groq-sdk';
import { BirthDetails, KundliReportData } from '../types';
import { fallbackReport } from '../data/fallbackReport';

// Initialize Groq client lazily
let groqClient: Groq | null = null;
const getGroqClient = () => {
  if (!groqClient) {
    const key = import.meta.env.VITE_GROQ_API_KEY;
    if (!key) {
      throw new Error('VITE_GROQ_API_KEY is missing');
    }
    groqClient = new Groq({
      apiKey: key,
      dangerouslyAllowBrowser: true
    });
  }
  return groqClient;
};

export const generateKundliReport = async (birthDetails: BirthDetails): Promise<KundliReportData> => {
  const systemPrompt = `
    You are a world-renowned Senior Vedic Astrologer, scholar of Jyotish Shastra, and Ayurvedic counselor.
    Generate an incredibly rich, personalized Vedic Kundli Report in JSON format.
    Ensure all fields are fully populated with insightful and descriptive astrological analyses. Under "spiritualProfile.ishtaDevata.deities", pick 2 noble deities (like Lord Vishnu, Ganesha, Shiva, Hanuman, Krishna, Lakshmi, Saraswati, Kali, Ram), and feel free to use generic quality Unsplash illustrations as urls, or simple descriptive emojis.
    Provide realistic planetary degrees (e.g. "12°34'56\\"") and appropriate houses based on traditional calculations.
  `;

  const userPrompt = `
    Generate the report for the following birth profile:
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
  `;

  try {
    const groq = getGroqClient();
    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: 'json_object' },
    });

    const reportText = response.choices[0]?.message?.content;
    if (reportText) {
      return JSON.parse(reportText.trim());
    } else {
      throw new Error('Empty responses from Groq models');
    }
  } catch (error: any) {
    console.error('Groq Generation Error:', error.message);
    // Smooth custom fallback
    const userReport = JSON.parse(JSON.stringify(fallbackReport));
    userReport.birthDetails = {
      ...userReport.birthDetails,
      ...birthDetails
    };
    userReport.birthStar.description = `Hello, ${birthDetails.name}! Based on your birth details of ${birthDetails.day}/${birthDetails.month}/${birthDetails.year} in ${birthDetails.city}, ${userReport.birthStar.description}`;
    return userReport;
  }
};
