import type { Patient, DietPlan, CheckIn } from '../types';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    goal: 'Weight Loss',
    status: 'active',
    lastCheckIn: '2 hours ago',
    currentWeight: 75.2,
    goalProgress: 65,
    streak: 12,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'mchen@email.com',
    goal: 'Athletic Performance',
    status: 'active',
    lastCheckIn: '1 day ago',
    currentWeight: 82.5,
    goalProgress: 80,
    streak: 25,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
  },
  {
    id: '3',
    name: 'Emma Davis',
    email: 'emma.d@email.com',
    goal: 'Maintenance',
    status: 'active',
    lastCheckIn: '5 hours ago',
    currentWeight: 68.0,
    goalProgress: 90,
    streak: 8,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
  },
  {
    id: '4',
    name: 'James Wilson',
    email: 'jwilson@email.com',
    goal: 'Weight Gain',
    status: 'inactive',
    lastCheckIn: '3 days ago',
    currentWeight: 65.8,
    goalProgress: 45,
    streak: 0,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
  },
  {
    id: '5',
    name: 'Olivia Martinez',
    email: 'olivia.m@email.com',
    goal: 'Health Management',
    status: 'active',
    lastCheckIn: '12 hours ago',
    currentWeight: 71.3,
    goalProgress: 72,
    streak: 15,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia',
  },
  {
    id: '6',
    name: 'Daniel Lee',
    email: 'dlee@email.com',
    goal: 'Weight Loss',
    status: 'active',
    lastCheckIn: '6 hours ago',
    currentWeight: 88.9,
    goalProgress: 55,
    streak: 20,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel',
  },
];

export const mockDietPlans: Record<string, DietPlan> = {
  '1': {
    id: 'plan-1',
    patientId: '1',
    date: '2024-12-22',
    meals: [
      {
        id: 'm1',
        type: 'breakfast',
        description: 'Greek yogurt (200g) with mixed berries (100g), granola (30g), and a drizzle of honey. Green tea on the side.',
        time: '8:00 AM',
        notes: 'High in protein to keep you full. Try to eat within 1 hour of waking up.',
      },
      {
        id: 'm2',
        type: 'lunch',
        description: 'Grilled chicken breast (150g) with quinoa (100g cooked), roasted vegetables (200g - bell peppers, zucchini, carrots), and a side salad with olive oil dressing.',
        time: '1:00 PM',
        notes: 'Make sure to drink water with your meal. The quinoa provides complex carbs for sustained energy.',
      },
      {
        id: 'm3',
        type: 'dinner',
        description: 'Baked salmon (120g) with sweet potato (150g) and steamed broccoli (150g). Light lemon butter sauce.',
        time: '7:00 PM',
        notes: 'Try to eat at least 2 hours before bedtime for better digestion.',
      },
      {
        id: 'm4',
        type: 'snack',
        description: 'Apple slices with almond butter (15g) or a handful of mixed nuts (30g).',
        time: '4:00 PM',
        notes: 'This snack helps bridge the gap between lunch and dinner.',
      },
    ],
  },
};

export const mockCheckIns: CheckIn[] = [
  {
    id: 'c1',
    patientId: '1',
    date: '2024-12-22',
    weight: 75.2,
    adherence: 'fully',
    activityLevel: 4,
  },
  {
    id: 'c2',
    patientId: '1',
    date: '2024-12-21',
    weight: 75.5,
    adherence: 'fully',
    activityLevel: 3,
  },
  {
    id: 'c3',
    patientId: '1',
    date: '2024-12-20',
    weight: 75.8,
    adherence: 'partially',
    activityLevel: 4,
  },
];

export const mockWeightData = [
  { date: 'Dec 1', weight: 78.5 },
  { date: 'Dec 5', weight: 78.0 },
  { date: 'Dec 8', weight: 77.5 },
  { date: 'Dec 12', weight: 76.8 },
  { date: 'Dec 15', weight: 76.2 },
  { date: 'Dec 18', weight: 75.8 },
  { date: 'Dec 22', weight: 75.2 },
];

export const mockAdherenceData = [
  { week: 'Week 1', adherence: 85 },
  { week: 'Week 2', adherence: 92 },
  { week: 'Week 3', adherence: 78 },
  { week: 'Week 4', adherence: 88 },
];

export const mockActivityData = [
  { date: 'Dec 1', activity: 3.5 },
  { date: 'Dec 5', activity: 4.0 },
  { date: 'Dec 8', activity: 3.8 },
  { date: 'Dec 12', activity: 4.2 },
  { date: 'Dec 15', activity: 3.9 },
  { date: 'Dec 18', activity: 4.5 },
  { date: 'Dec 22', activity: 4.0 },
];
