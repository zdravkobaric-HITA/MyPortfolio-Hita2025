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
  avatar?: string;
  goal: 'Weight Loss' | 'Weight Gain' | 'Maintenance' | 'Athletic Performance' | 'Health Management';
  status: 'active' | 'inactive';
  lastCheckIn?: string;
  currentWeight?: number;
  goalProgress?: number;
  streak?: number;
}

export interface Meal {
  id: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  description: string;
  time?: string;
  image?: string;
  notes?: string;
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
  activityLevel: 1 | 2 | 3 | 4 | 5;
  notes?: string;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  timestamp: Date;
}
