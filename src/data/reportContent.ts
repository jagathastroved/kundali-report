import { KundliReportData } from '../types';

export const reportContent = {
  landing: {
    heroTitle: "Discover Your True Path\nThrough Kundali",
    heroDesc: "Unlock the hidden meanings of your birth chart. Gain deep insights into your personality, destiny, and life's true purpose.",
    features: [
      { title: "Personalized Kundali Chart", desc: "Access your detailed birth chart based on precise birth details." },
      { title: "Core Personality", desc: "Reveal your strengths, challenges, talents, and true life potential." },
      { title: "Dasha Timeline", desc: "Understand current and future planetary periods shaping your journey." },
      { title: "Karmic Chakra Analysis", desc: "Uncover karmic patterns and the spiritual lessons guiding your growth." },
      { title: "Planetary Profiles", desc: "Gain insights into how each planet influences different areas of life." },
      { title: "Influential Signs", desc: "Learn how key zodiac signs affect your personality and life path." }
    ]
  },
  welcome: {
    title: "Namaste",
    subtitle: "Your Cosmic Blueprint",
    introText: "Your cosmic coordinates align uniquely. We've mapped the exact celestial forces present at your birth to create this deeply personalized Kundali report, offering profound insights into your life's true journey."
  },
  birthStar: {
    // chapterInfo: "Chapter 01: Cosmic Origin",
    titlePrefix: "Your Birth Star is",
    deityPrefix: "Associated with the Deity",
    personalityTitle: "Core Personality",
    personalityText: "As a {nkName}, you are naturally curious and possess a great desire for knowledge. You have an excellent memory and love to learn new things. You are also a good listener and are sensitive to the needs of others. You are respectful of tradition and often hold a position of authority or leadership within your community.",
    strengthsTitle: "Strengths & Weaknesses",
    yourStrengths: "Your Strengths",
    areasForGrowth: "Areas for Growth"
  },
  corePersonality: {
    // chapterInfo: "Chapter 02: Core Framework",
    title: "Core Personality Profile",
    description: "In Vedic Astrology, your personality is shaped by multiple pillars. Your BIG 3 includes your Sun sign, Moon sign, and Ascendant. It is the most important parameter which represents your physical, emotional, and spiritual pathways.",
    sunTitle: "Sun Sign (Surya)",
    sunDesc: "The essence of your core self, representational ego, spark of truth and spiritual willpower in this incarnation.",
    moonTitle: "Moon Sign (Chandra)",
    moonDesc: "An insight into your emotional self, inner instincts, gut feelings, safety needs and intuitive processes.",
    risingTitle: "Rising Sign (Lagna)",
    risingDesc: "Your outward persona and social mask. This represents how you naturally express yourself to strangers."
  },
  influentialSigns: {
    chapterInfo: "As per your kundli,",
    title: "The three most influential and important signs for you",
    sunEssenceTitle: "Your Sun Sign Essence",
    risingPersonaTitle: "Your Rising Sign Persona",
    moonEmotionTitle: "Your Moon Sign Emotion",
    mostImportantLabel: "Most Important"
  },
  dominantElement: {
    title: "Can you see how your qualities are connected to the blessings of nature?",
    description: "The universe is said to be made up of five things: fire, earth, air, water, and ether. In Vedic tradition, these Panchamahabhuta elements rule over your energetic frequency and behavior.",
    fireTitle: "Fire Element (Agni)",
    fireDesc: "Primal energy, focus, enthusiasm, and spiritual courage.",
    earthTitle: "Earth Element (Prithvi)",
    earthDesc: "Practical structures, patient foundations, stability, and dependability.",
    airTitle: "Air Element (Vayu)",
    airDesc: "Intellectual agility, speech, conceptual logic, and communication.",
    waterTitle: "Water Element (Jala)",
    waterDesc: "Deep intuitive fields, empathy, creative flow state, and memory.",
    etherTitle: "Ether Element (Akasha)",
    etherDesc: "Universal spaciousness, higher wisdom, spiritual portals, and truth alignment.",
    yogiMetrology: "Yogi Metrology",
    assessmentTitle: "Dominant Element Assessment",
    yourDominantElements: "Your Dominant Elements",
    dominanceText: "As per your precise Vedic sidereal coordinates, you are highly {element} element dominated. This signifies that you {description}"
  },
  lagnaChart: {
    title: "Your Lagna Kundli Chart",
    stelliumQuestion: "What repeating pattern of your nature does Vedic Astrology reveal?",
    stelliumDesc1: "A stellium happens when three or more planets gather in one house of your Kundli. If a stellium is present in your birth chart, the house it's in becomes the most active and influential part of your life.",
    stelliumDesc2: "With a stellium in your ninth house, areas like philosophy, beliefs, travel and higher learning are integral parts of your life. You likely have an insatiable curiosity to understand the meaning behind things and seek truth through exploring ideas, cultures and new horizons.",
    stelliumDesc3: "This suggests you will find great purpose in academic pursuits, world travel, or just experiencing all this amazing planet has to offer. Overall, this placement indicates that expanding your perspectives - whether through physical journeys or inner soul searching - is a major focal point in this lifetime."
  },
  reportFeatures: {
    premiumInsight: "Premium Insight",
    heroTitle: "Here we have prepared your in-depth personalized Premium Kundli Report",
    heroDesc: "Know your future predictions and remedies for the next 6 to 8 years. Also, get an in-depth Kundli analysis of your important life areas.",
    whatYouGet: "What you will get in this report?",
    discoverChapters: "Discover the comprehensive chapters included in your premium analysis",
    reviewName: "Dhaval Motghare",
    reviewRole: "Verified User",
    reviewText: "\"One of the most detailed and useful kundli report I have come across. It provides simple and effective remedies that are easy to follow. I am really satisfied after using it. Thanks for creating this useful kundli report !!!\"",
    ctaText: "Get Your Kundli Report Now",
    features: [
      { title: 'Your Kundli and its Calculation', description: 'Learn about yourself by knowing your special Kundli. Also, you will get 21 horoscope charts about different life parts.' },
      { title: 'Elements of your Kundli', description: 'Find out about your panchang and the predictions and remedies based on it. Also, get to know about your birth nakshatra. See which of the five elements (5 tattva) affects you the most.' },
      { title: 'Doshas and Remedies for you', description: 'Get predictions and remedies to follow for the dosha present in your Kundli, such as Manglik dosha, kalsarpa dosha, and many more.' },
      { title: 'In-depth analysis of your kundli', description: 'Know yourself through 11 detailed reports on key life parts. From your Lagna report to Career, Wealth & Finances, Marriage & relationship. Also, know your past life lessons and suggestions so that you do not make the same mistakes.' },
      { title: 'Detailed Kundli Predictions', description: 'Get detailed predictions, possible planet challenges in your kundli, and ways to fix them.' },
      { title: 'Dasha Predictions for the next 8 years', description: 'This report gives predictions and remedies for the next 6-8 years. Know about coming good and bad times, and how to handle them well.' }
    ]
  },
  karmicChakra: {
    title: "Stored Karma & Dominant Chakra",
    description: "Chakra percentages gives you how much karma do you have stored in each of your chakras. By using this method, you can count the spread of your karma through your chakras in percentage. The Chakra, which has the highest percentage, is the chakra on which you need to work most in this lifetime. It also reveals that the majority of life lessons will come to you in this lifetime through this chakra.",
    dominantCenter: "Your Dominant Energy Center",
    remedyTitle: "Spiritual Remedy"
  },
  planetaryStrengths: {
    title: "Planetary Shield Strengths",
    description: "Planets carry unique energetic behaviors depending on their Vedic dignity. Understanding your planetary shields helps you navigate your strengths and prepare for life's challenges.",
    yogaKarakaTitle: "Yogakaraka Planets",
    yogaKarakaDesc: "Yoga Karaka indicates the supreme helper planet in your natal Kundli, carrying massive powers to invite overall growth.",
    beneficsTitle: "Benefic Forces",
    beneficsDesc: "These are highly protective, auspicious planets that represent areas of ease, wellness, and mental calm.",
    maleficsTitle: "Malefic Challenges",
    maleficsDesc: "These are challenging areas where unexpected spiritual lessons, lessons, and tests are triggered."
  },
  planetaryProfiles: {
    title: "All Planetary Positions",
    description: "A comprehensive view of all 9 planetary bodies in your Kundli and how they shape your life's path.",
    remediationTitle: "Corrective Jyotish Remediation"
  },
  atmakaraka: {
    title: "Atmakaraka Insight",
    description: "The Atmakaraka is the planet with the highest degree in your Kundli. It represents the ultimate desire of your soul and the core spiritual lessons you are here to learn.",
    yourAtmakaraka: "Your Atmakaraka",
    soulDesireTitle: "The Soul's Underlying Desire",
    planet: "Venus (Shukra)",
    soulDesire: "With Venus as your Atmakaraka, your soul deeply craves beauty, pristine balance, and pure unconditional love. On the earthly planes, this manifests as fine artistic refinement and deep respect for relationships. However, you must occasionally practice detachment from luxury and physical appearances to prevent karmic binding."
  },
  dashaTimeline: {
    title: "Current Dasha Timeline",
    activePhase: "Active Phase",
    currentDasha: "Rahu Mahadasha & Venus Antardasha",
    description: "Vedic astrology divides your life journey into structured chronological dasha segments ruled by key planets. The planetary lord ruling your active Mahadasha provides the principal theme for your career developments, wealth, and wellness traits."
  },
  premiumDeliverables: {
    title: "A Masterpiece of Vedic Knowledge",
    features: [
      { title: "Birth Star Analysis", desc: "Discover the celestial forces that shaped your destiny at the exact moment of your birth." },
      { title: "Core Personality", desc: "Uncover your true inner self, revealing hidden strengths and profound potentials." },
      { title: "Dasha Wheel", desc: "Navigate life timelines with precise predictions for upcoming planetary periods." },
      { title: "Dominant Element", desc: "Understand the fundamental natural forces driving your temperament and energy." },
      { title: "Influential Signs", desc: "Learn how specific zodiac signs profoundly impact your decisions and relationships." },
      { title: "Karmic Chakra", desc: "Explore the past-life karmic patterns influencing your present challenges." },
      { title: "Kundali Chart", desc: "Get a meticulously detailed map of the heavens customized perfectly for you." },
      { title: "Planetary Profiles", desc: "Dive deep into how each planet uniquely shapes your wealth, health, and love life." },
      { title: "Planetary Strength", desc: "Analyze the exact power of planets to find your greatest advantages in life." }
    ]
  }
};


export const fallbackReport: KundliReportData = {
  birthDetails: {
    name: 'Jagath',
    gender: 'Male',
    day: 3,
    month: 3,
    year: 2000,
    hour: 12,
    minute: 12,
    country: 'India',
    city: 'Chennai, Tamil Nadu',
    language: 'english'
  },
  birthStar: {
    nkName: 'Shravana',
    zodiacSign: 'Capricorn (Makara)',
    rulingPlanet: 'Moon (Chandra)',
    associatedDeity: 'Lord Vishnu (The Preserver)',
    description: 'Hello, Shravan Nakshatra! You were born in the sign of Capricorn, ruled by the Moon. Shravana is symbolized by three footprints, signifying Lord Vishnu\'s strides spanning the three worlds. This bestows you with an insatiable quest for knowledge and the powerful gift of active listening. You have a warm, receptive aura, and your natural intelligence helps you organize plans and achieve major spiritual and material success.',
    strengths: 'Intellectually versatile, highly principled, fantastic listener, empathetic leader, respected in society, spiritual nature, and seeks persistent truth.',
    weaknesses: 'Can be excessively generous to a fault, sometimes hyper-sensitive to criticism, or experience occasional periods of restless solitude.'
  },
  personality: {
    coreTraits: [
      'Empathetic Listener',
      'Humanitarian Spirit',
      'Unshakable Perseverance',
      'Philosophical Inquirer'
    ],
    description: 'The Big 3 represents your core cosmic framework: your Sun sign, Moon sign, and rising Ascendant. Together, they represent your path of action, emotional template, and outward expression.',
    bigThree: {
      sun: {
        sign: 'Aquarius (Kumbha)',
        description: 'Embodying an Aquarius Sun, your soul is innovative and humanitarian. You believe strongly in individuality and the betterment of society. Your strength lies in your visionary outlook and your ability to think unconventionally, always aiming to make a meaningful difference.'
      },
      moon: {
        sign: 'Capricorn (Makara)',
        description: 'With your Moon in Capricorn, you seek emotional stability through structure, responsibility, and realistic ambition. Your mind works in highly practical ways. Emotional satisfaction comes from building long-lived projects and taking care of families.'
      },
      ascendant: {
        sign: 'Taurus (Vrishabha)',
        description: 'Having Taurus as your rising sign, you present a calm, patient, and highly steadfast composure to the world. Your outer persona is grounded and stable, showing an appreciation for high-quality craft, nature, and peaceful harmony.'
      }
    }
  },
  elementAnalysis: {
    dominant: 'Ether',
    description: 'The universe is composed of Five Great Elements (Pancha Maha Bhoota). Your specific astrological profile represents your dynamic interaction with these forces.',
    ratios: [
      { name: 'Ether', percentage: 38, description: 'Vast expanse of knowledge, highly receptive, spiritual incline, curiosity for abstract ideas, and intuitive wisdom.' },
      { name: 'Air', percentage: 31, description: 'Intellectual depth, versatile communication skills, dynamic adaptability, and progressive thinker.' },
      { name: 'Water', percentage: 23, description: 'Deep emotional emotional intelligence, high intuition, creative expression, and nurturing tendencies.' },
      { name: 'Fire', percentage: 8, description: 'Tempered willpower, deliberate action, focused goals, and warmth without impulsive aggression.' },
      { name: 'Earth', percentage: 0, description: 'Relies heavily on mental structures and spiritual anchors rather than heavy static physical ties, giving massive freedom.' }
    ]
  },
  storedKarma: {
    goodPercentage: 74,
    pendingLessons: [
      'Patience with material developments: Allowing seeds to grow organically rather than forcing rapid results.',
      'Active expression of voice: Making sure your wisdom and listening abilities are channeled into speech and written record.',
      'Balancing detachment with daily responsibilities: Integrating spiritual heights with routine earthbound duties.'
    ],
    karmicDebtPlanet: 'Saturn (Shani)',
    storedKarmasDescription: 'Chakra alignment maps how dynamic karmic footprints are scattered across your energetic centers. The Vishuddha (throat) and Anahata (heart) chakras carry the largest pool of your spiritual lessons in this incarnation.'
  },
  chakraAnalysis: {
    chakras: [
      { name: 'Vishuddha', sanskritName: 'Throat', percentage: 38, status: 'Balanced', description: 'Empowers you to express your subtle truths and listen with profound spiritual attunement.', remedy: 'Chanting simple seed mantras (HAM), playing wind instruments, and speaking authentic truths.' },
      { name: 'Anahata', sanskritName: 'Heart', percentage: 25, status: 'Balanced', description: 'Channels universal love, empathy, and deep communion with all living things.', remedy: 'Breathing exercises (Pranayama) and deliberate acts of selfless helping (Seva).' },
      { name: 'Manipura', sanskritName: 'Solar Plexus', percentage: 15, status: 'Underactive', description: 'Manages dynamic vitality, physical power, and digestional fire.', remedy: 'Mindful physical activity, consuming warm healing herbs, and exposing yourself to sun rays.' },
      { name: 'Svadhishthana', sanskritName: 'Sacral', percentage: 12, status: 'Balanced', description: 'Governs aesthetic sense, appreciation for fine arts, and fluid movement.', remedy: 'Participating in musical or artistic projects and staying near freshwater resources.' },
      { name: 'Muladhara', sanskritName: 'Root', percentage: 10, status: 'Underactive', description: 'Coordinates feelings of physical safety, root grounding, and stability.', remedy: 'Walking barefoot on dry grass, solidifying step-by-step structures, and gardening.' }
    ],
    dominantChakra: {
      name: 'Vishuddha',
      sanskritName: 'Throat Chakra',
      percentage: 38,
      status: 'Balanced',
      description: 'The Vishuddha chakra is highly dominant within you! This endows you with a profound connection to communication, artistic expression, and receptive wisdom. You are here to learn active listening and guide others to speak their absolute truth.',
      remedy: 'Practice active throat chanting or singing, and express your creative insights without fear of judgment.'
    },
    description: 'Chakra percentages tell you the relative focus of your soul\'s developmental priorities. The energetic center carrying the highest score indicates where your primary karmic lessons will gather.'
  },
  doshaAnalysis: {
    doshas: [
      { name: 'Vata', percentage: 45, description: 'Governed by Ether and Air. Highly active, creative, enthusiastic, and versatile, but handles tendencies of anxiety or dry skin when out of balance.', symptoms: ['Mental restlessness', 'Light sleep', 'Cold hands and feet'] },
      { name: 'Pitta', percentage: 35, description: 'Governed by Fire and Water. Analytical, highly focused, courageous, and passionate, but deals with impatience or inflammation when in excess.', symptoms: ['Acidity', 'Impatience with slow processes', 'Irritation under extreme heat'] },
      { name: 'Kapha', percentage: 20, description: 'Governed by Earth and Water. Calm, loving, incredibly loyal, steady, and tolerant, but deals with lethargy or slow metabolism when overactive.', symptoms: ['Oversleeping tendency', 'Slow digestion', 'Reluctance to break old habits'] }
    ],
    dominantDosha: 'Vata-Pitta (Dual Temperament)',
    balanceRemedy: 'Avoid extremely cold or raw foods. Focus on warm, nutritious, grounding stews. Practice soothing breaths like alternate nostril breathing. Use soothing warm sesame oils for self-massage.'
  },
  planetaryStrengths: {
    planets: {
      sun: {
        name: 'Surya (Sun)',
        sanskritName: 'Surya',
        sign: 'Aquarius',
        degree: "19°08'21\"",
        house: 10,
        nakshatra: 'Shatabhisha',
        isBenefic: true,
        status: 'Benefic',
        description: 'The Sun occupies your 10th house of career and public visibility. For a Taurus Rising, the Sun is highly favorable. It rules the 4th house of stability and self-contentment, positioning you as an influential and respected leader in your field.',
        remediation: 'Offer water to the morning sun in a copper vessel, and recite the Gayatri mantra regularly.'
      },
      moon: {
        name: 'Chandra (Moon)',
        sanskritName: 'Chandra',
        sign: 'Capricorn',
        degree: "14°59'11\"",
        house: 9,
        nakshatra: 'Shravana',
        isBenefic: false,
        status: 'Malefic',
        description: 'The Moon occupies your 9th house, governing your Higher Beliefs and Faith. Because the Moon rules your 3rd house of mental efforts, it introduces strong sensitivity. It may lead you to seek multiple paths simultaneously.',
        remediation: 'Worship the divine mother aspects or keep a fast on full moon nights (Purnima).'
      },
      mercury: {
        name: 'Budha (Mercury)',
        sanskritName: 'Budh',
        sign: 'Aquarius',
        degree: "15°45'39\"",
        house: 10,
        nakshatra: 'Shatabhisha',
        isBenefic: true,
        status: 'Benefic',
        description: 'Mercury is parked in your 10th house alongside the Sun, creating a powerful Budhaditya Yoga. Since Mercury rules your 2nd (wealth) and 5th (intellect) houses, this positions you with elite skills in communications, speaking, and research.',
        remediation: 'Support green environmental project works and feed grass to cows on Wednesdays.'
      },
      jupiter: {
        name: 'Brihaspati (Jupiter)',
        sanskritName: 'Guru',
        sign: 'Aries',
        degree: "09°15'12\"",
        house: 12,
        nakshatra: 'Ashwini',
        isBenefic: false,
        status: 'Malefic',
        description: 'Jupiter resides in your 12th house (isolation, spirituality). Since Jupiter governs the 8th (transformations) and 11th (gains) houses for Taurus, its status here suggests potential spiritual expenditures or unexpected financial turns.',
        remediation: 'Listen to spiritual guides, donate yellow items to educational organizations, and study higher philosophies.'
      },
      venus: {
        name: 'Shukra (Venus)',
        sanskritName: 'Shukra',
        sign: 'Capricorn',
        degree: "23°32'06\"",
        house: 9,
        nakshatra: 'Dhanishtha',
        isBenefic: true,
        status: 'Benefic',
        description: 'Venus resides in your 9th house of dharma and higher learnings. As the ruling Ascendant planet of your entire chart (Taurus), this placement is highly protective, bringing deep refine, aesthetic appreciation, and noble guides.',
        remediation: 'Maintain general personal neatness, respect female teachers and peers, and chant Venus mantras on Fridays.'
      },
      mars: {
        name: 'Mangala (Mars)',
        sanskritName: 'Mangal',
        sign: 'Pisces',
        degree: "21°27'11\"",
        house: 11,
        nakshatra: 'Revati',
        isBenefic: false,
        status: 'Malefic',
        description: 'Mars sits in your 11th house of community networks and profits. While it can produce sudden spikes of income, it rules your 12th and 7th houses, occasionally creating active friction with close friends or colleagues.',
        remediation: 'Chant Hanuman Chalisa or Kartikeya mantras, and practice gentle exercises.'
      },
      saturn: {
        name: 'Shani (Saturn)',
        sanskritName: 'Shani',
        sign: 'Aries',
        degree: "18°44'31\"",
        house: 12,
        nakshatra: 'Bharani',
        isBenefic: true,
        status: 'Yogakaraka',
        description: 'Saturn occupies your 12th house. As Saturn rules the 9th and 10th houses for Taurus Rising, it represents a classic Yogakaraka. It indicates major spiritual breakthroughs and accomplishments stemming from foreign journeys or quiet introspection.',
        remediation: 'Provide charity to the elderly, avoid pride, and light a sesame oil lamp under a Peepal tree on Saturdays.'
      },
      rahu: {
        name: 'Rahu (North Node)',
        sanskritName: 'Rahu',
        sign: 'Cancer',
        degree: "07°54'49\"",
        house: 3,
        nakshatra: 'Pushya',
        isBenefic: true,
        status: 'Benefic',
        description: 'Rahu is located in your 3rd house. This gives you fierce drive, supreme writing and communication capacity, and an intuitive knack for understanding mass psychology. You are extremely resourceful.',
        remediation: 'Feed birds and avoid getting locked into paranoid habits of over-worrying.'
      },
      ketu: {
        name: 'Ketu (South Node)',
        sanskritName: 'Ketu',
        sign: 'Capricorn',
        degree: "07°54'49\"",
        house: 9,
        nakshatra: 'Uttara Shadha',
        isBenefic: false,
        status: 'Malefic',
        description: 'Ketu sits in your 9th house of deep spirituality and fatherly relationships. It creates highly independent views regarding dogma. You seek Direct Gnosis rather than following mainstream systems.',
        remediation: 'Donate warm blanketing items to those in need, and meditate on abstract formless truths.'
      }
    },
    yogakaraka: ['Saturn (Shani)'],
    benefics: ['Saturn', 'Sun', 'Mercury'],
    malefics: ['Jupiter', 'Moon', 'Venus', 'Mars']
  },
  spiritualProfile: {
    ishtaDevata: {
      name: 'Mata Sri Kali & Sri Hanuman',
      deities: [
        { name: 'Mata Sri Kali', avatarUrl: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&q=80&w=400', emoji: '🕉️' },
        { name: 'Sri Hanuman', avatarUrl: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=400', emoji: '🐒' }
      ],
      description: 'Your Ishta Devata represents the protective archetype your soul naturally communicates with from prior lives. Meditating on Kali or Hanuman brings profound mental courage and rapid protection.'
    },
    atmakaraka: {
      planetName: 'Venus (Shukra)',
      description: 'Venus/Shukra is your Atmakaraka, the planet representing your soul\'s focal aspirations.',
      soulDesireText: 'With Venus as your Atmakaraka, your soul deeply craves beauty, pristine balance, and pure unconditional love. On the earthly planes, this manifests as fine artistic refinement and deep respect for relationships. However, you must occasionally practice detachment from luxury and physical appearances to prevent karmic binding.'
    }
  },
  dashaTimeline: [
    { levelName: 'Maha Dasha', planetName: 'Rahu', startDate: '06 June 2013', endDate: '07 June 2031' },
    { levelName: 'Antar Dasha', planetName: 'Venus', startDate: '24 December 2024', endDate: '25 December 2027' },
    { levelName: 'Pratyantar Dasha', planetName: 'Rahu', startDate: '21 January 2026', endDate: '04 July 2026' },
    { levelName: 'Sookshma Dasha', planetName: 'Moon', startDate: '11 June 2026', endDate: '24 June 2026' },
    { levelName: 'Prana Dasha', planetName: 'Moon', startDate: '11 June 2026 03:23', endDate: '12 June 2026 06:47' }
  ],
  predictions: [
    { category: 'Career', score: 85, text: 'The confluence of your Rahu/Venus dasha in the 10th house is placing you in a position of massive professional visibility. Expect a breakthrough in leadership, communications, or media ventures.', remedy: 'Speak with deliberate composure. Avoid rushing your execution.' },
    { category: 'Wealth', score: 78, text: 'Solid financial gains are arriving through creative work or strategic advisors. Minor domestic expenditures for your comfort or home are expected.', remedy: 'Keep a portion of your profits locked in secure liquid values.' },
    { category: 'Health', score: 90, text: 'Physically you are resilient, with high energy. The digestive tract might feel slightly dry due to elevated Vata energy, but sleep is returning to a calm baseline.', remedy: 'Keep yourself hydrated with hot ginger-cinnamon tea.' },
    { category: 'Relationships', score: 82, text: 'Noble alignments with your mentors and supportive peers. Perfect time to reconcile administrative family issues.', remedy: 'Practice peaceful active listening before giving advice.' },
    { category: 'Spirituality', score: 95, text: 'A deeply intuitive interval. Insights are flowing effortlessly into your dreams and daily contemplations.', remedy: 'Dedicate 10 minutes of quiet meditation before dawn.' }
  ]
};
