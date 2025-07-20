// lib/hume.js
const HUME_CONFIG = {
  apiKey: process.env.HUME_API_KEY,
  secretKey: process.env.HUME_SECRET_KEY,
  baseUrl: 'https://api.hume.ai/v0/evi/chat',
  models: {
    'dr-sarah-chen': 'empathic-therapist-v2',
    'marcus-thompson': 'business-mentor-v1', 
    'luna-rodriguez': 'creative-companion-v1',
    'professor-williams': 'academic-tutor-v1',
    'jamie-park': 'fitness-coach-v1'
  }
};

export default HUME_CONFIG;

export const AGENTS_DATA = [
  {
    id: 'dr-sarah-chen',
    name: 'Dr. Sarah Chen',
    role: 'Wellness & Mental Health Coach',
    personality: 'Calm, empathetic, professional therapist',
    specialization: 'Stress management, mindfulness, emotional support',
    price: 120, // €2.00/minute in tokens
    avatar: '/avatars/dr-sarah-chen.jpg',
    humeModel: 'empathic-therapist-v2',
    description: 'Dr. Sarah Chen is a compassionate wellness coach specializing in mental health and emotional well-being. With her calming presence and therapeutic approach, she helps you navigate stress, build mindfulness practices, and develop emotional resilience.',
    voiceStyle: 'Soothing, calm, therapeutic',
    active: true
  },
  {
    id: 'marcus-thompson',
    name: 'Marcus Thompson',
    role: 'Business & Career Mentor',
    personality: 'Confident, strategic, motivational coach',
    specialization: 'Career advice, leadership, business strategy',
    price: 108, // €1.80/minute in tokens
    avatar: '/avatars/marcus-thompson.jpg',
    humeModel: 'business-mentor-v1',
    description: 'Marcus Thompson is a seasoned business strategist and career coach who helps professionals reach their full potential. His strategic insights and motivational approach have guided countless individuals to career breakthroughs and business success.',
    voiceStyle: 'Authoritative, inspiring, professional',
    active: true
  },
  {
    id: 'luna-rodriguez',
    name: 'Luna Rodriguez',
    role: 'Creative Companion & Friend',
    personality: 'Artistic, imaginative, encouraging friend',
    specialization: 'Creative projects, art, writing, brainstorming',
    price: 90, // €1.50/minute in tokens
    avatar: '/avatars/luna-rodriguez.jpg',
    humeModel: 'creative-companion-v1',
    description: 'Luna Rodriguez is your creative muse and artistic companion. With boundless imagination and infectious enthusiasm, she helps you unlock your creative potential, overcome creative blocks, and bring your artistic visions to life.',
    voiceStyle: 'Enthusiastic, warm, inspiring',
    active: true
  },
  {
    id: 'professor-williams',
    name: 'Professor Williams',
    role: 'Academic Tutor & Learning Guide',
    personality: 'Patient, knowledgeable, encouraging teacher',
    specialization: 'Study help, research, learning new skills',
    price: 96, // €1.60/minute in tokens
    avatar: '/avatars/professor-williams.jpg',
    humeModel: 'academic-tutor-v1',
    description: 'Professor Williams is a dedicated educator with a passion for knowledge sharing. His patient teaching style and comprehensive understanding make complex subjects accessible, helping students and lifelong learners achieve their educational goals.',
    voiceStyle: 'Clear, patient, educational',
    active: true
  },
  {
    id: 'jamie-park',
    name: 'Jamie Park',
    role: 'Fitness & Lifestyle Coach',
    personality: 'Energetic, motivational, health-focused',
    specialization: 'Fitness goals, nutrition, healthy habits',
    price: 84, // €1.40/minute in tokens
    avatar: '/avatars/jamie-park.jpg',
    humeModel: 'fitness-coach-v1',
    description: 'Jamie Park is your energetic fitness and lifestyle coach who transforms health goals into achievable realities. With infectious energy and practical wisdom, Jamie helps you build sustainable healthy habits and reach your fitness potential.',
    voiceStyle: 'Upbeat, motivating, energetic',
    active: true
  }
];

export const TOKEN_PACKAGES = [
  {
    id: 'starter',
    name: 'Starter Pack',
    tokens: 1000,
    price: 10,
    bonus: 0,
    popular: false,
    description: '~7 minutes with premium agents'
  },
  {
    id: 'popular',
    name: 'Popular Choice',
    tokens: 3000,
    price: 25,
    bonus: 500,
    popular: true,
    description: '~25 minutes + bonus tokens'
  },
  {
    id: 'professional',
    name: 'Professional',
    tokens: 7000,
    price: 50,
    bonus: 1500,
    popular: false,
    description: '~60 minutes + bonus tokens'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tokens: 20000,
    price: 120,
    bonus: 5000,
    popular: false,
    description: '~180 minutes + bonus tokens'
  }
]; 