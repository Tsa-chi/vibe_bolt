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
  const [manualShoppingList, setManualShoppingList] = useState<{item: string; checked: boolean; category: string}[]>([]);
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

  const toggleManualShoppingItem = (index: number) => {
    setManualShoppingList(prev => prev.map((item, i) => 
      i === index ? { ...item, checked: !item.checked } : item
    ));
  };

  const addManualShoppingItem = () => {
    if (newShoppingItem.trim()) {
      const newItem = {
        item: newShoppingItem.trim(),
        checked: false,
        category: selectedCategory
      };
      setManualShoppingList(prev => [...prev, newItem]);
      setNewShoppingItem('');
    }
  };

  const removeManualShoppingItem = (index: number) => {
    setManualShoppingList(prev => prev.filter((_, i) => i !== index));
  };

  const mergeShoppingLists = () => {
    const existingItems = new Set(shoppingList.map(item => item.item.toLowerCase()));
    const newItems = manualShoppingList.filter(item => 
      !existingItems.has(item.item.toLowerCase())
    );
    setShoppingList(prev => [...prev, ...newItems]);
    setManualShoppingList([]);
  };

  const clearShoppingList = () => {
    setShoppingList([]);
    setManualShoppingList([]);
    setSelectedMealPlan(null);
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
      {/* AI Photo Feature */}
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

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <Scale className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-500">Weight</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{userStats.currentWeight}kg</div>
          <div className="text-sm text-gray-500">Goal: {userStats.goalWeight}kg</div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-gray-500">Calories</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{userStats.caloriesConsumed}</div>
          <div className="text-sm text-gray-500">of {userStats.dailyCalories}</div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Today's Progress</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Calories</span>
              <span>{userStats.caloriesConsumed}/{userStats.dailyCalories}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((userStats.caloriesConsumed / userStats.dailyCalories) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Exercise</span>
              <span>{userStats.exerciseMinutes}/{userStats.exerciseGoal} min</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((userStats.exerciseMinutes / userStats.exerciseGoal) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderShopping = () => (
    <div className="space-y-6 pb-24">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Shopping List</h2>
        <ShoppingCart className="w-6 h-6 text-teal-600" />
      </div>

      {/* Meal Plan Shopping List */}
      {shoppingList.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">From Meal Plan</h3>
            <button
              onClick={clearShoppingList}
              className="text-red-600 text-sm hover:text-red-700"
            >
              Clear All
            </button>
          </div>
          
          <div className="space-y-2">
            {shoppingList.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleShoppingItem(index)}
                    className="w-5 h-5 text-teal-600 rounded"
                  />
                  <span className={`${item.checked ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {item.item}
                  </span>
                </div>
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Manual Shopping List */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Manual List</h3>
        
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={newShoppingItem}
            onChange={(e) => setNewShoppingItem(e.target.value)}
            placeholder="Add item..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && addManualShoppingItem()}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Proteins">Proteins</option>
            <option value="Grains">Grains</option>
            <option value="Pantry">Pantry</option>
            <option value="Beverages">Beverages</option>
            <option value="Other">Other</option>
          </select>
          <button
            onClick={addManualShoppingItem}
            className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Add
          </button>
        </div>

        {manualShoppingList.length > 0 && (
          <div className="space-y-2">
            {manualShoppingList.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleManualShoppingItem(index)}
                    className="w-5 h-5 text-teal-600 rounded"
                  />
                  <span className={`${item.checked ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {item.item}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <button
                    onClick={() => removeManualShoppingItem(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Merge Lists Button */}
      {shoppingList.length > 0 && manualShoppingList.length > 0 && (
        <button
          onClick={mergeShoppingLists}
          className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition-colors"
        >
          Merge Lists
        </button>
      )}
    </div>
  );

  const renderMeals = () => (
    <div className="space-y-6 pb-24">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Meal Planning</h2>
        <UtensilsCrossed className="w-6 h-6 text-orange-600" />
      </div>

      <div className="grid gap-4">
        {mealPlans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.duration}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-orange-600">{plan.calories} cal</div>
                <div className="text-xs text-gray-500">
                  P: {plan.protein}g | C: {plan.carbs}g | F: {plan.fat}g
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Breakfast</h4>
                <p className="text-sm text-gray-600">{plan.meals.breakfast.join(', ')}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Lunch</h4>
                <p className="text-sm text-gray-600">{plan.meals.lunch.join(', ')}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Dinner</h4>
                <p className="text-sm text-gray-600">{plan.meals.dinner.join(', ')}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Snacks</h4>
                <p className="text-sm text-gray-600">{plan.meals.snacks.join(', ')}</p>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedMealPlan(plan);
                generateShoppingList(plan);
                setActiveMenu('shopping');
              }}
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Generate Shopping List
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return renderDashboard();
      case 'shopping':
        return renderShopping();
      case 'meals':
        return renderMeals();
      case 'profile':
        return (
          <div className="space-y-6 pb-24">
            <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-600">Profile settings coming soon...</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6 pb-24">
            <h2 className="text-2xl font-bold text-gray-900 capitalize">{activeMenu.replace('-', ' ')}</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-600">This section is coming soon...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <h1 className="text-xl font-bold text-gray-900">Me but better</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out`}>
          <div className="p-4 pt-20 md:pt-4">
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveMenu(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeMenu === item.id
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${item.color}`} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          {renderContent()}
        </main>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default App;