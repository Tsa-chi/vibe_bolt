import React, { useState } from 'react';
import { 
  Home, User, Calculator, Dumbbell, UtensilsCrossed, ShoppingCart, 
  Plus, BarChart3, Award, Users, Settings, Camera, Target, 
  TrendingUp, Calendar, CheckCircle, Heart, Scale, Activity,
  Apple, Zap, Trophy, Star, Bell, Shield, ChevronRight,
  PlayCircle, BookOpen, Scan, Clock, MapPin, Menu, X,
  ChevronUp, ChevronDown
} from 'lucide-react';

type MenuItem = 'dashboard' | 'profile' | 'macros' | 'exercise' | 'meals' | 'shopping' | 'food-input' | 'exercise-input' | 'health' | 'analysis' | 'rewards' | 'community' | 'settings';

interface DashboardStats {
  currentWeight: number;
  goalWeight: number;
  dailyCalories: number;
  caloriesConsumed: number;
  exerciseMinutes: number;
  exerciseGoal: number;
  bloodPressure: { systolic: number; diastolic: number };
  bloodSugar: number;
}

interface MacroGoals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface AnalysisData {
  period: string;
  totalCalories: number;
  avgDailyCalories: number;
  macroBreakdown: {
    protein: { amount: number; percentage: number };
    carbs: { amount: number; percentage: number };
    fat: { amount: number; percentage: number };
  };
  nutritionScore: number;
  adherenceRate: number;
  weightProgress: number;
  exerciseCompliance: number;
}
interface MealPlan {
  id: string;
  name: string;
  duration: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  meals: {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
    snacks: string[];
  };
}

interface Exercise {
  id: string;
  name: string;
  category: 'cardio' | 'strength' | 'flexibility' | 'sports';
  duration: number;
  calories: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  equipment: string[];
  instructions: string[];
}

interface WorkoutPlan {
  id: string;
  name: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  exercises: Exercise[];
  totalCalories: number;
  totalDuration: number;
}
function App() {
  const [activeMenu, setActiveMenu] = useState<MenuItem>('dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMealPlan, setSelectedMealPlan] = useState<MealPlan | null>(null);
  const [shoppingList, setShoppingList] = useState<{item: string; checked: boolean; category: string}[]>([]);
  const [selectedWorkoutPlan, setSelectedWorkoutPlan] = useState<WorkoutPlan | null>(null);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<string>('1 Day');
  const [newShoppingItem, setNewShoppingItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Other');
  
  const [userStats, setUserStats] = useState<DashboardStats>({
    currentWeight: 75,
    goalWeight: 65,
    dailyCalories: 1800,
    caloriesConsumed: 1200,
    exerciseMinutes: 30,
    exerciseGoal: 45,
    bloodPressure: { systolic: 125, diastolic: 82 },
    bloodSugar: 95
  });

  const [macroGoals] = useState<MacroGoals>({
    calories: 1800,
    protein: 135,
    carbs: 180,
    fat: 60
  });

  const menuItems = [
    { id: 'dashboard' as MenuItem, icon: Home, label: 'Dashboard', color: 'text-blue-600' },
    { id: 'profile' as MenuItem, icon: User, label: 'Profile', color: 'text-purple-600' },
    { id: 'macros' as MenuItem, icon: Calculator, label: 'Macro Calculator', color: 'text-green-600' },
    { id: 'exercise' as MenuItem, icon: Dumbbell, label: 'Exercise Planner', color: 'text-red-600' },
    { id: 'meals' as MenuItem, icon: UtensilsCrossed, label: 'Meal Planning', color: 'text-orange-600' },
    { id: 'shopping' as MenuItem, icon: ShoppingCart, label: 'Shopping List', color: 'text-teal-600' },
    { id: 'food-input' as MenuItem, icon: Plus, label: 'Food Input', color: 'text-yellow-600' },
    { id: 'exercise-input' as MenuItem, icon: Activity, label: 'Exercise Input', color: 'text-pink-600' },
    { id: 'health' as MenuItem, icon: Heart, label: 'Health Tracker', color: 'text-rose-600' },
    { id: 'analysis' as MenuItem, icon: BarChart3, label: 'Analysis', color: 'text-indigo-600' },
    { id: 'rewards' as MenuItem, icon: Award, label: 'Rewards', color: 'text-amber-600' },
    { id: 'community' as MenuItem, icon: Users, label: 'Community', color: 'text-cyan-600' },
    { id: 'settings' as MenuItem, icon: Settings, label: 'Settings', color: 'text-gray-600' },
  ];

  const mealPlans: MealPlan[] = [
    {
      id: '1day-plan1',
      name: 'Quick Start',
      duration: '1 Day',
      calories: 1800,
      protein: 135,
      carbs: 180,
      fat: 60,
      meals: {
        breakfast: ['Oatmeal with berries', 'Greek yogurt', 'Green tea'],
        lunch: ['Grilled chicken salad', 'Quinoa', 'Olive oil dressing'],
        dinner: ['Baked salmon', 'Steamed broccoli', 'Sweet potato'],
        snacks: ['Apple with almond butter', 'Protein shake']
      }
    },
    {
      id: '1day-plan2',
      name: 'Mediterranean',
      duration: '1 Day',
      calories: 1750,
      protein: 130,
      carbs: 175,
      fat: 65,
      meals: {
        breakfast: ['Greek yogurt parfait', 'Whole grain toast', 'Fresh fruit'],
        lunch: ['Mediterranean bowl', 'Hummus', 'Pita bread'],
        dinner: ['Grilled fish', 'Roasted vegetables', 'Brown rice'],
        snacks: ['Mixed nuts', 'Herbal tea']
      }
    }
  ];

  const exercises: Exercise[] = [
    {
      id: 'push-ups',
      name: 'Push-ups',
      category: 'strength',
      duration: 10,
      calories: 50,
      difficulty: 'beginner',
      equipment: [],
      instructions: ['Start in plank position', 'Lower body to ground', 'Push back up', 'Repeat']
    },
    {
      id: 'jumping-jacks',
      name: 'Jumping Jacks',
      category: 'cardio',
      duration: 15,
      calories: 75,
      difficulty: 'beginner',
      equipment: [],
      instructions: ['Stand with feet together', 'Jump while spreading legs', 'Raise arms overhead', 'Return to start']
    },
    {
      id: 'squats',
      name: 'Squats',
      category: 'strength',
      duration: 12,
      calories: 60,
      difficulty: 'beginner',
      equipment: [],
      instructions: ['Stand with feet shoulder-width apart', 'Lower body as if sitting', 'Keep chest up', 'Return to standing']
    },
    {
      id: 'plank',
      name: 'Plank Hold',
      category: 'strength',
      duration: 8,
      calories: 40,
      difficulty: 'intermediate',
      equipment: [],
      instructions: ['Start in push-up position', 'Hold body straight', 'Engage core muscles', 'Breathe steadily']
    }
  ];

  const workoutPlans: WorkoutPlan[] = [
    {
      id: 'beginner-cardio',
      name: 'Beginner Cardio',
      duration: '20 minutes',
      difficulty: 'beginner',
      exercises: [exercises[1], exercises[0], exercises[2]],
      totalCalories: 185,
      totalDuration: 37
    },
    {
      id: 'strength-basics',
      name: 'Strength Basics',
      duration: '25 minutes',
      difficulty: 'beginner',
      exercises: [exercises[0], exercises[2], exercises[3]],
      totalCalories: 150,
      totalDuration: 30
    },
    {
      id: 'full-body-workout',
      name: 'Full Body Workout',
      duration: '30 minutes',
      difficulty: 'intermediate',
      exercises: exercises,
      totalCalories: 225,
      totalDuration: 45
    }
  ];
  const getHealthColor = (type: string, value: number | { systolic: number; diastolic: number }) => {
    switch (type) {
      case 'weight':
        const weightValue = value as number;
        if (weightValue <= userStats.goalWeight + 2) return 'text-green-600 bg-green-50';
        if (weightValue <= userStats.goalWeight + 5) return 'text-yellow-600 bg-yellow-50';
        return 'text-red-600 bg-red-50';
      
      case 'bloodPressure':
        const bp = value as { systolic: number; diastolic: number };
        if (bp.systolic < 120 && bp.diastolic < 80) return 'text-green-600 bg-green-50';
        if (bp.systolic < 140 && bp.diastolic < 90) return 'text-yellow-600 bg-yellow-50';
        return 'text-red-600 bg-red-50';
      
      case 'bloodSugar':
        const sugar = value as number;
        if (sugar >= 70 && sugar <= 100) return 'text-green-600 bg-green-50';
        if (sugar >= 100 && sugar <= 125) return 'text-yellow-600 bg-yellow-50';
        return 'text-red-600 bg-red-50';
      
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const generateShoppingList = (plan: MealPlan) => {
    // Generate shopping list based on meal plan
    const ingredientMap: { [key: string]: string } = {
      'Oatmeal with berries': 'Oats, Mixed Berries',
      'Greek yogurt': 'Greek Yogurt',
      'Green tea': 'Green Tea Bags',
      'Grilled chicken salad': 'Chicken Breast, Mixed Greens, Cherry Tomatoes',
      'Quinoa': 'Quinoa',
      'Olive oil dressing': 'Olive Oil, Lemon',
      'Baked salmon': 'Salmon Fillet',
      'Steamed broccoli': 'Broccoli',
      'Sweet potato': 'Sweet Potato',
      'Apple with almond butter': 'Apples, Almond Butter',
      'Protein shake': 'Protein Powder, Milk',
      'Greek yogurt parfait': 'Greek Yogurt, Granola, Honey',
      'Whole grain toast': 'Whole Grain Bread',
      'Fresh fruit': 'Bananas, Strawberries',
      'Mediterranean bowl': 'Chickpeas, Cucumber, Olives, Feta Cheese',
      'Hummus': 'Hummus',
      'Pita bread': 'Pita Bread',
      'Grilled fish': 'White Fish Fillet',
      'Roasted vegetables': 'Bell Peppers, Zucchini, Red Onion',
      'Brown rice': 'Brown Rice',
      'Mixed nuts': 'Mixed Nuts',
      'Herbal tea': 'Herbal Tea Bags'
    };

    const categoryMap: { [key: string]: string } = {
      'Oats': 'Grains', 'Mixed Berries': 'Produce', 'Greek Yogurt': 'Dairy',
      'Green Tea Bags': 'Beverages', 'Chicken Breast': 'Proteins', 'Mixed Greens': 'Produce',
      'Cherry Tomatoes': 'Produce', 'Quinoa': 'Grains', 'Olive Oil': 'Pantry',
      'Lemon': 'Produce', 'Salmon Fillet': 'Proteins', 'Broccoli': 'Produce',
      'Sweet Potato': 'Produce', 'Apples': 'Produce', 'Almond Butter': 'Pantry',
      'Protein Powder': 'Supplements', 'Milk': 'Dairy', 'Granola': 'Pantry',
      'Honey': 'Pantry', 'Whole Grain Bread': 'Bakery', 'Bananas': 'Produce',
      'Strawberries': 'Produce', 'Chickpeas': 'Pantry', 'Cucumber': 'Produce',
      'Olives': 'Pantry', 'Feta Cheese': 'Dairy', 'Hummus': 'Refrigerated',
      'Pita Bread': 'Bakery', 'White Fish Fillet': 'Proteins', 'Bell Peppers': 'Produce',
      'Zucchini': 'Produce', 'Red Onion': 'Produce', 'Brown Rice': 'Grains',
      'Mixed Nuts': 'Pantry', 'Herbal Tea Bags': 'Beverages'
    };

    const allIngredients = new Set<string>();
    
    // Extract ingredients from all meals
    Object.values(plan.meals).flat().forEach(meal => {
      if (ingredientMap[meal]) {
        ingredientMap[meal].split(', ').forEach(ingredient => {
          allIngredients.add(ingredient);
        });
      }
    });

    const items = Array.from(allIngredients).map(ingredient => ({
      item: ingredient,
      checked: false,
      category: categoryMap[ingredient] || 'Other'
    }));

    setShoppingList(items);
  };

  const toggleShoppingItem = (index: number) => {
    setShoppingList(prev => prev.map((item, i) => 
      i === index ? { ...item, checked: !item.checked } : item
    ));
  };

  const markShoppingListDone = () => {
    setShoppingList([]);
    setSelectedMealPlan(null);
    // Show success message or redirect to meals
    setActiveMenu('meals');
  };

  const addManualShoppingItem = () => {
    if (newShoppingItem.trim()) {
      const newItem = {
        item: newShoppingItem.trim(),
        checked: false,
        category: selectedCategory
      };
      setShoppingList(prev => [...prev, newItem]);
      setNewShoppingItem('');
    }
  };

  const removeShoppingItem = (index: number) => {
    setShoppingList(prev => prev.filter((_, i) => i !== index));
  };

  const toggleExerciseComplete = (exerciseId: string) => {
    setCompletedExercises(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };
  const renderDashboard = () => (
    <div className="space-y-6 pb-24">
      {/* AI Photo Feature - Thumb-friendly */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Camera className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">See Your Future Self</h3>
          <p className="text-purple-100 mb-6">AI-generated visualization of you 10kg slimmer</p>
          <button className="w-full bg-white text-purple-600 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-colors">
            Generate Photo
          </button>
        </div>
        <p className="text-xs text-purple-200 mt-4 text-center">
          *Results may vary based on individual factors
        </p>
      </div>
    </div>
  );
}