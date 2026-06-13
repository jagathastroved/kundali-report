import { KundliReportData } from '../types';

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
