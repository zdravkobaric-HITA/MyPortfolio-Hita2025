export const patients = [
  {
    id: '1',
    name: 'Marko Mitrovic',
    email: 'marko.mitrovic@email.com',
    goal: 'Weight Loss',
    currentWeight: 75.2,
    targetWeight: 65,
    progress: 65,
    adherence: 85,
    streak: 12,
    status: 'active',
    lastCheckIn: '2 hours ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarkoMitrovic'
  },
  {
    id: '2',
    name: 'Ivo Juric',
    email: 'ivo.j@email.com',
    goal: 'Athletic Performance',
    currentWeight: 82.5,
    targetWeight: 80,
    progress: 80,
    adherence: 92,
    streak: 25,
    status: 'active',
    lastCheckIn: '1 day ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=IvoJuric'
  },
  {
    id: '3',
    name: 'Ema Kosec',
    email: 'ema.kosec@email.com',
    goal: 'Maintenance',
    currentWeight: 68.0,
    targetWeight: 68,
    progress: 90,
    adherence: 78,
    streak: 8,
    status: 'active',
    lastCheckIn: '5 hours ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmaKosec'
  },
  {
    id: '4',
    name: 'Boro Perišić',
    email: 'boro.perisic@email.com',
    goal: 'Weight Gain',
    currentWeight: 65.8,
    targetWeight: 75,
    progress: 45,
    adherence: 45,
    streak: 0,
    status: 'inactive',
    lastCheckIn: '3 days ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BoroPerisic'
  },
  {
    id: '5',
    name: 'Olivera Jošt',
    email: 'olivera.j@email.com',
    goal: 'Health Management',
    currentWeight: 71.3,
    targetWeight: 70,
    progress: 72,
    adherence: 88,
    streak: 15,
    status: 'active',
    lastCheckIn: '12 hours ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OliveraJošt'
  },
  {
    id: '6',
    name: 'Daniela Jalovec',
    email: 'daniela.jalovec@email.com',
    goal: 'Weight Loss',
    currentWeight: 88.9,
    targetWeight: 80,
    progress: 55,
    adherence: 70,
    streak: 20,
    status: 'active',
    lastCheckIn: '6 hours ago',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanielaJalovec'
  }
];

export const mealExamples = {
  breakfast: "Greek yogurt (200g) with mixed berries (100g), granola (30g), and honey. Green tea on the side.",
  lunch: "Grilled chicken breast (150g) with quinoa (100g), roasted vegetables (200g), side salad with olive oil dressing.",
  dinner: "Baked salmon (120g) with sweet potato (150g) and steamed broccoli (150g). Light lemon butter sauce.",
  snack: "Apple slices with almond butter (15g) or mixed nuts (30g)."
};

export const weekDays = [
  { day: 'Mon', date: 16, isToday: false },
  { day: 'Tue', date: 17, isToday: false },
  { day: 'Wed', date: 18, isToday: false },
  { day: 'Thu', date: 19, isToday: false },
  { day: 'Fri', date: 20, isToday: false },
  { day: 'Sat', date: 21, isToday: false },
  { day: 'Sun', date: 22, isToday: true }
];

export const motivationalMessages = [
  "Keep up the great work!",
  "You're doing amazing!",
  "Consistency is key!",
  "You're on the right track!",
  "Every day is progress!"
];

export const analyticsData = {
  averageAdherence: 85,
  weightChange: -3.2,
  checkInStreak: 12,
  activeDays: 24,
  totalDays: 30,
  weightTrend: [
    { date: 'Dec 1', weight: 78.4 },
    { date: 'Dec 5', weight: 77.8 },
    { date: 'Dec 10', weight: 76.9 },
    { date: 'Dec 15', weight: 76.2 },
    { date: 'Dec 20', weight: 75.6 },
    { date: 'Dec 25', weight: 75.2 }
  ],
  adherenceRate: [
    { week: 'Week 1', rate: 80 },
    { week: 'Week 2', rate: 85 },
    { week: 'Week 3', rate: 90 },
    { week: 'Week 4', rate: 85 }
  ]
};