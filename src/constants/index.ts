// src/constants/index.ts

/**
 * 1. GLOBAL SITE CONFIG & METADATA
 */
export const SITE_CONFIG = {
  name: "TITAN BUILD",
  tagline: "Elite Strength & Conditioning",
  description: "The premier destination for elite athletes and those serious about physical transformation.",
  established: "MMXXVI",
  contact: {
    email: "hello@titanbuild.com",
    phone: "+1 (555) 000-TITAN",
    address: "123 Iron Street, Forge District, NY",
    hours: "Mon-Fri: 5am - 11pm | Sat-Sun: 7am - 9pm",
    mapCoords: { lat: 40.7128, lng: -74.0060 },
  },
  socials: {
    instagram: "https://instagram.com/titanbuild",
    facebook: "https://facebook.com/titanbuild",
    youtube: "https://youtube.com/titanbuild",
    twitter: "https://twitter.com/titanbuild",
  }
};

/**
 * 2. NAVIGATION (Multi-page)
 */
export const NAV_LINKS = [
  { name: "Programs", href: "/programs" },
  { name: "Facility", href: "/facility" },
  { name: "Coaching", href: "/coaching" },
  { name: "Membership", href: "/membership" },
  { name: "Contact", href: "/contact" },
];

/**
 * 3. HERO SECTION DATA
 */
export const HERO_CONTENT = {
  title: "UNLEASH YOUR INNER TITAN",
  subtitle: "The most exclusive strength and conditioning facility in the city. Professional coaching, elite equipment, and a community of winners.",
  stats: [
    { label: "Active Members", value: "500+" },
    { label: "Elite Coaches", value: "12+" },
    { label: "Facility Access", value: "24/7" },
  ],
  videoSource: "/hero-video.mp4"
};

/**
 * 4. DETAILED PROGRAMS (The Methodology Page)
 */
export const PROGRAMS = [
  {
    id: "strength",
    title: "Absolute Strength",
    focus: "Hypertrophy & Power",
    tag: "Most Popular",
    description: "Built on the principles of progressive overload and mechanical tension. This program is for those looking to move maximum weight and build dense muscle.",
    metrics: { intensity: 95, volume: 70, recovery: 60 },
    benefits: ["CNS Adaptation", "Myofibrillar Growth", "Force Production"],
    image: "/programs/strength-deep.jpg"
  },
  {
    id: "hybrid",
    title: "Titan Hybrid",
    focus: "Conditioning & Skill",
    tag: "High Intensity",
    description: "The bridge between raw power and elite-level metabolic conditioning. Designed for the versatile athlete who needs speed and stamina.",
    metrics: { intensity: 80, volume: 85, recovery: 75 },
    benefits: ["VO2 Max Increase", "Work Capacity", "Functional Strength"],
    image: "/programs/hybrid-deep.jpg"
  },
  {
    id: "recovery",
    title: "Neuro-Recovery",
    focus: "Restoration",
    tag: "Essential",
    description: "Scientific protocols to down-regulate the nervous system and accelerate tissue repair using advanced infrared and compression technology.",
    metrics: { intensity: 10, volume: 20, recovery: 100 },
    benefits: ["Parasympathetic Activation", "Tissue Elasticity", "Inflammation Control"],
    image: "/programs/recovery-deep.jpg"
  }
];

/**
 * 5. ELITE COACHES (Coaching Page)
 */
export const TRAINERS = [
  {
    id: "marcus-kane",
    name: "Marcus Kane",
    role: "Head of Strength",
    specialty: "Powerlifting & Hypertrophy",
    bio: "10+ years coaching elite athletes with a focus on biomechanics and raw power. Marcus believes in the 'Iron First' philosophy.",
    image: "/trainers/marcus.jpg",
    certs: ["NASM PES", "Westside Barbell Certified", "CSCS"],
    social: { instagram: "@marcus_titan", twitter: "@marcus_k" }
  },
  {
    id: "sarah-vane",
    name: "Sarah Vane",
    role: "Performance Coach",
    specialty: "Athletic Conditioning",
    bio: "Former D1 athlete specializing in explosive speed and functional mobility for professional field athletes.",
    image: "/trainers/sarah.jpg",
    certs: ["CSCS", "Precision Nutrition L2", "FMS Level 2"],
    social: { instagram: "@sarah_vane_pro", twitter: "@svane_perf" }
  },
  {
    id: "viktor-drago",
    name: "Viktor Drago",
    role: "Combat Specialist",
    specialty: "Boxing & MMA Speed",
    bio: "Integrating combat sports conditioning with traditional heavy strength work for peak fight-day performance.",
    image: "/trainers/viktor.jpg",
    certs: ["USA Boxing L1", "Brown Belt BJJ", "NASM CPT"],
    social: { instagram: "@drago_boxing", twitter: "@v_drago" }
  }
];

/**
 * 6. FACILITY ZONES & EQUIPMENT (Facility Page)
 */
export const FACILITY_ZONES = [
  {
    id: "power-alley",
    title: "The Power Alley",
    description: "Our main floor featuring competition-grade racks and platforms, designed for heavy compound lifting.",
    specs: ["12 Rogue Monster Racks", "Eleiko IWF Plates", "Custom 30m Turf Track", "Kabuki Specialty Bars"],
    image: "/facility/power.jpg"
  },
  {
    id: "recovery-lab",
    title: "Recovery Lab",
    description: "State-of-the-art restoration zone designed to reduce downtime and optimize hormonal balance.",
    specs: ["Full-Spectrum Infrared Sauna", "4°C Cold Plunge", "Normatec Compression", "Percussive Therapy Zone"],
    image: "/facility/recovery.jpg"
  },
  {
    id: "cardio-loft",
    title: "Cardio Loft",
    description: "The high-performance endurance zone featuring air-resistance machines and curved treadmills.",
    specs: ["Concept2 Rowers & SkiErgs", "Assault AirBikes", "Technogym SkillMills"],
    image: "/facility/cardio.jpg"
  }
];

/**
 * 7. GALLERY BENTO GRID
 */
export const GALLERY_IMAGES = [
  { id: 1, src: "/gallery/gym-1.jpg", title: "Main Floor", size: "large" },
  { id: 2, src: "/gallery/gym-2.jpg", title: "Recovery", size: "medium" },
  { id: 3, src: "/gallery/gym-3.jpg", title: "Training", size: "small" },
  { id: 4, src: "/gallery/gym-4.jpg", title: "Equipment", size: "medium" },
];

/**
 * 8. MEMBERSHIP & PRICING
 */
export const PRICING = [
  {
    id: "base",
    name: "Base",
    price: "49",
    description: "Essential access for the dedicated trainee.",
    features: [
      "Access to All Training Zones",
      "Standard Locker Room",
      "Complimentary Wi-Fi",
      "Mobile App Access",
      "2 Guest Passes / Year"
    ],
    isFeatured: false
  },
  {
    id: "elite",
    name: "Elite",
    price: "99",
    description: "The complete Titan experience with premium restoration perks.",
    features: [
      "24/7 Facility Access",
      "Unlimited Recovery Lab",
      "1 Monthly Personal Training Session",
      "Custom Nutrition Planning",
      "Titan Apparel Welcome Kit",
      "Unlimited Guest Passes"
    ],
    isFeatured: true
  }
];

/**
 * 9. TESTIMONIALS (Social Proof)
 */
export const TESTIMONIALS = [
  {
    quote: "The environment at Titan Build is unmatched. I’ve hit PRs I never thought possible.",
    author: "James Miller",
    role: "Member since 2023",
  },
  {
    quote: "Expert coaching and a facility that actually respects your time and goals.",
    author: "Elena Rodriguez",
    role: "Elite Athlete",
  },
  {
    quote: "Finally a gym that treats strength training like a science, not a hobby.",
    author: "David Chen",
    role: "Powerlifter",
  },
  {
    quote: "The best investment I've made for my health. The trainers are world-class.",
    author: "Sarah Jenkins",
    role: "Corporate Professional",
  },
];

/**
 * 10. FAQ DATA
 */
export const FAQS = [
  {
    question: "What is the cancellation policy?",
    answer: "We offer a flexible month-to-month policy. Cancellations require a 30-day notice via the member portal."
  },
  {
    question: "Do you offer guest passes?",
    answer: "Yes, members can bring guests. Base members get 2 per year, Elite members get unlimited passes."
  },
  {
    question: "Is personal training mandatory?",
    answer: "Not at all. While we recommend an initial assessment, our facility is open for independent training 24/7."
  },
  {
    question: "Are there long-term contracts?",
    answer: "No. We believe in the quality of our service. You stay because you see results, not because of a contract."
  }
];