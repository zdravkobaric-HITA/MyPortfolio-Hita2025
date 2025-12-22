// Mock data for NutriCare Lite prototype

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'nutritionist' | 'patient';
  avatar?: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  goal: 'Weight Loss' | 'Weight Gain' | 'Maintenance' | 'Athletic Performance' | 'Health Management';
  currentWeight: number;
  goalProgress: number;
  lastCheckIn: string;
  status: 'active' | 'inactive';
  streak: number;
  activeDays: number;
}

export interface Meal {
  id: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  time?: string;
  description: string;
  notes?: string;
  image?: string;
}

export interface DietPlan {
  id: string;
  patientId: string;
  date: string;
  meals: Meal[];
}

export interface CheckIn {
  id: string;
  patientId: string;
  date: string;
  weight: number;
  adherence: 'fully' | 'partially' | 'not';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
  notes?: string;
}

// Mock Users
export const mockNutritionist: User = {
  id: 'nut-1',
  name: 'Dr. Zdravko Zdravković',
  email: 'zdravko@nutricare.com',
  role: 'nutritionist',
};

export const mockPatientUser: User = {
  id: 'pat-1',
  name: 'John Doe',
  email: 'pacijent@example.com',
  role: 'patient',
};

// Mock Patients
export const mockPatients: Patient[] = [
  {
    id: 'pat-1',
    name: 'John Doe',
    email: 'john@example.com',
    goal: 'Weight Loss',
    currentWeight: 75.2,
    goalProgress: 65,
    lastCheckIn: '2 hours ago',
    status: 'active',
    streak: 12,
    activeDays: 24,
  },
  {
    id: 'pat-2',
    name: 'Emma Wilson',
    email: 'emma@example.com',
    goal: 'Athletic Performance',
    currentWeight: 62.5,
    goalProgress: 80,
    lastCheckIn: '1 day ago',
    status: 'active',
    streak: 18,
    activeDays: 28,
  },
  {
    id: 'pat-3',
    name: 'Michael Brown',
    email: 'michael@example.com',
    goal: 'Weight Gain',
    currentWeight: 68.3,
    goalProgress: 45,
    lastCheckIn: '3 days ago',
    status: 'active',
    streak: 5,
    activeDays: 15,
  },
];

// Mock Diet Plans
export const mockDietPlans: DietPlan[] = [
  {
    id: 'plan-1',
    patientId: 'pat-1',
    date: '2024-12-22',
    meals: [
      {
        id: 'meal-1',
        type: 'breakfast',
        time: '8:00 AM',
        description: 'Oatmeal with fresh berries, chia seeds, and a drizzle of honey. Green tea on the side.',
        notes: 'Remember to use low-fat milk and avoid adding extra sugar.',
      },
      {
        id: 'meal-2',
        type: 'lunch',
        time: '12:30 PM',
        description: 'Grilled chicken breast with quinoa and roasted vegetables (broccoli, carrots, bell peppers). Light olive oil dressing.',
        notes: 'Make sure to include at least 2 cups of vegetables.',
      },
      {
        id: 'meal-3',
        type: 'dinner',
        time: '7:00 PM',
        description: 'Baked salmon with sweet potato and steamed asparagus. Side salad with lemon vinaigrette.',
        notes: 'Aim for a 4-6 oz portion of salmon.',
      },
      {
        id: 'meal-4',
        type: 'snack',
        description: 'Greek yogurt with almonds and a small apple.',
      },
    ],
  },
];

// Mock Check-ins
export const mockCheckIns: CheckIn[] = [
  {
    id: 'check-1',
    patientId: 'pat-1',
    date: '2024-12-22',
    weight: 75.2,
    adherence: 'fully',
    activityLevel: 'moderate',
    notes: 'Feeling energetic today!',
  },
];

// Mock Analytics Data
export const mockWeightData = [
  { date: 'Dec 1', weight: 78.5 },
  { date: 'Dec 5', weight: 77.8 },
  { date: 'Dec 10', weight: 77.0 },
  { date: 'Dec 15', weight: 76.2 },
  { date: 'Dec 20', weight: 75.5 },
  { date: 'Dec 22', weight: 75.2 },
];

export const mockAdherenceData = [
  { week: 'Week 1', full: 80, partial: 15, not: 5 },
  { week: 'Week 2', full: 85, partial: 10, not: 5 },
  { week: 'Week 3', full: 90, partial: 8, not: 2 },
  { week: 'Week 4', full: 88, partial: 10, not: 2 },
];

export const mockActivityData = [
  { date: 'Dec 1', activity: 6 },
  { date: 'Dec 5', activity: 7 },
  { date: 'Dec 10', activity: 8 },
  { date: 'Dec 15', activity: 7 },
  { date: 'Dec 20', activity: 9 },
  { date: 'Dec 22', activity: 8 },
];
