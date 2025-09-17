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
          *AI-generated images are for visualization purposes only
        </p>
      </div>

      {/* Health Metrics - Color Coded */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          Health Overview
        </h3>
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${getHealthColor('weight', userStats.currentWeight)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Weight</p>
                  <p className="text-sm opacity-75">Goal: {userStats.goalWeight}kg</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{userStats.currentWeight}kg</p>
                <button className="text-sm underline mt-1">Update</button>
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-xl ${getHealthColor('bloodPressure', userStats.bloodPressure)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Blood Pressure</p>
                  <p className="text-sm opacity-75">mmHg</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{userStats.bloodPressure.systolic}/{userStats.bloodPressure.diastolic}</p>
                <button className="text-sm underline mt-1">Update</button>
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-xl ${getHealthColor('bloodSugar', userStats.bloodSugar)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Blood Sugar</p>
                  <p className="text-sm opacity-75">mg/dL</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{userStats.bloodSugar}</p>
                <button className="text-sm underline mt-1">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
          <Apple className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">{userStats.caloriesConsumed}</p>
          <p className="text-sm text-gray-600">of {userStats.dailyCalories} cal</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
          <Activity className="w-8 h-8 text-red-600 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">{userStats.exerciseMinutes}min</p>
          <p className="text-sm text-gray-600">of {userStats.exerciseGoal}min</p>
        </div>
      </div>

      {/* Shopping List Quick Access */}
      {shoppingList.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-teal-600" />
              Shopping List
            </h3>
            <span className="text-sm text-gray-500">
              {shoppingList.filter(item => item.checked).length}/{shoppingList.length} items
            </span>
          </div>
          <button 
            onClick={() => setActiveMenu('shopping')}
            className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-teal-700 transition-colors"
          >
            View Shopping List
          </button>
        </div>
      )}

      {/* Daily Tips */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Today's Tip
        </h3>
        <p className="text-green-100">
          "Drink a glass of water before each meal to help with portion control and hydration."
        </p>
      </div>
    </div>
  );

  const renderMeals = () => (
    <div className="space-y-6 pb-24">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-center">Create Your Meal Plan</h3>
        
        {!selectedMealPlan ? (
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-lg font-medium mb-4">Choose Duration</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['1 Day', '3 Days', '1 Week', '2 Weeks', '1 Month'].map(duration => (
                  <button key={duration} className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-colors">
                    <span className="font-medium">{duration}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-center">Available Plans (1 Day)</h4>
              <div className="space-y-4">
                {mealPlans.map(plan => (
                  <div key={plan.id} className="border-2 border-gray-200 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h5 className="font-semibold text-lg">{plan.name}</h5>
                        <p className="text-sm text-gray-600">{plan.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600">{plan.calories} cal</p>
                        <p className="text-xs text-gray-500">P:{plan.protein}g C:{plan.carbs}g F:{plan.fat}g</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedMealPlan(plan)}
                      className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Select Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Selected: {selectedMealPlan.name}</h4>
              <p className="text-blue-700 text-sm mb-3">{selectedMealPlan.duration} • {selectedMealPlan.calories} calories</p>
              <div className="flex justify-between text-sm text-blue-600">
                <span>Protein: {selectedMealPlan.protein}g</span>
                <span>Carbs: {selectedMealPlan.carbs}g</span>
                <span>Fat: {selectedMealPlan.fat}g</span>
              </div>
            </div>

            <div className="space-y-4">
              {Object.entries(selectedMealPlan.meals).map(([mealType, items]) => (
                <div key={mealType} className="border border-gray-200 rounded-xl p-4">
                  <h5 className="font-semibold capitalize mb-3 text-lg">{mealType}</h5>
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setSelectedMealPlan(null)}
                className="py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Change Plan
              </button>
              <button 
                onClick={() => {
                  generateShoppingList(selectedMealPlan);
                }}
                className="py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
              >
                Generate Shopping List
              </button>
            </div>
            
            {shoppingList.length > 0 && (
              <div className="mt-4 p-4 bg-teal-50 rounded-xl border border-teal-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-teal-800 font-medium">Shopping list generated!</span>
                  </div>
                  <button 
                    onClick={() => setActiveMenu('shopping')}
                    className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1"
                  >
                    View List
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-teal-600 mt-1">
                  {shoppingList.length} items added to your shopping list
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderShopping = () => (
    <div className="space-y-6 pb-24">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Shopping List</h3>
          {selectedMealPlan && (
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {selectedMealPlan.name}
            </span>
          )}
        </div>
        
        {shoppingList.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-6">No shopping list created yet</p>
            <button 
              onClick={() => setActiveMenu('meals')}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Create Meal Plan First
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">
                {shoppingList.filter(item => item.checked).length} of {shoppingList.length} completed
              </span>
              <div className="flex gap-2">
                <button className="text-sm text-blue-600 hover:text-blue-700 px-3 py-1 border border-blue-200 rounded-lg">
                  Export
                </button>
                <button className="text-sm text-green-600 hover:text-green-700 px-3 py-1 border border-green-200 rounded-lg">
                  Share
                </button>
                {shoppingList.filter(item => item.checked).length === shoppingList.length && shoppingList.length > 0 && (
                  <button 
                    onClick={markShoppingListDone}
                    className="text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-1 border border-green-600 rounded-lg font-medium"
                  >
                    Done
                  </button>
                )}
                <button 
                  onClick={() => setShoppingList([])}
                  className="text-sm text-red-600 hover:text-red-700 px-3 py-1 border border-red-200 rounded-lg"
                >
                  Clear
                </button>
              </div>
            </div>

            {['Produce', 'Proteins', 'Dairy', 'Grains', 'Bakery', 'Pantry', 'Refrigerated', 'Beverages', 'Supplements', 'Other'].map(category => {
              const categoryItems = shoppingList.filter(item => item.category === category);
              if (categoryItems.length === 0) return null;
              
              return (
                <div key={category} className="border border-gray-200 rounded-xl p-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    {category}
                    <span className="text-sm text-gray-500 font-normal">
                      ({categoryItems.filter(item => !item.checked).length} remaining)
                    </span>
                  </h4>
                  <div className="space-y-3">
                    {categoryItems.map((item, index) => {
                      const globalIndex = shoppingList.findIndex(i => i === item);
                      return (
                        <label key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="w-5 h-5 rounded" 
                            checked={item.checked}
                            onChange={() => toggleShoppingItem(globalIndex)}
                          />
                          <span className={`flex-1 text-lg ${item.checked ? 'line-through text-gray-500' : ''}`}>
                            {item.item}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {shoppingList.filter(item => item.checked).length === shoppingList.length && shoppingList.length > 0 && (
              <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-green-800 mb-2">Shopping Complete! 🎉</h4>
                <p className="text-green-700 mb-4">
                  Great job! You've completed your entire shopping list.
                </p>
                <button 
                  onClick={markShoppingListDone}
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors"
                >
                  Mark as Done & Create New List
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderExercise = () => (
    <div className="space-y-6 pb-24">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-center">Exercise Planner</h3>
        
        {!selectedWorkoutPlan ? (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-4 text-center">Choose Your Workout</h4>
              <div className="space-y-4">
                {workoutPlans.map(plan => (
                  <div key={plan.id} className="border-2 border-gray-200 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h5 className="font-semibold text-lg">{plan.name}</h5>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            plan.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                            plan.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {plan.difficulty}
                          </span>
                          <span className="text-sm text-gray-600">{plan.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-red-600">{plan.totalCalories} cal</p>
                        <p className="text-xs text-gray-500">{plan.exercises.length} exercises</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedWorkoutPlan(plan)}
                      className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                    >
                      Start Workout
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-4">
              <h4 className="font-semibold text-red-900 mb-2">Current Workout: {selectedWorkoutPlan.name}</h4>
              <p className="text-red-700 text-sm mb-3">{selectedWorkoutPlan.duration} • {selectedWorkoutPlan.totalCalories} calories</p>
              <div className="flex justify-between text-sm text-red-600">
                <span>Exercises: {selectedWorkoutPlan.exercises.length}</span>
                <span>Completed: {completedExercises.length}/{selectedWorkoutPlan.exercises.length}</span>
              </div>
              <div className="w-full bg-red-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-red-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(completedExercises.length / selectedWorkoutPlan.exercises.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-lg">Exercise Checklist</h5>
              {selectedWorkoutPlan.exercises.map((exercise, index) => (
                <div key={exercise.id} className={`border-2 rounded-xl p-4 transition-colors ${
                  completedExercises.includes(exercise.id) 
                    ? 'border-green-300 bg-green-50' 
                    : 'border-gray-200'
                }`}>
                  <div className="flex items-start gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-6 h-6 rounded text-green-600" 
                        checked={completedExercises.includes(exercise.id)}
                        onChange={() => toggleExerciseComplete(exercise.id)}
                      />
                    </label>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h6 className={`font-semibold text-lg ${
                          completedExercises.includes(exercise.id) ? 'text-green-700 line-through' : ''
                        }`}>
                          {exercise.name}
                        </h6>
                        <div className="text-right">
                          <p className="text-sm font-medium text-red-600">{exercise.calories} cal</p>
                          <p className="text-xs text-gray-500">{exercise.duration} min</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          exercise.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                          exercise.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {exercise.difficulty}
                        </span>
                        <span className="text-xs text-gray-600 capitalize">{exercise.category}</span>
                        {exercise.equipment.length === 0 && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            No Equipment
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Instructions:</p>
                        <ol className="text-sm text-gray-600 space-y-1">
                          {exercise.instructions.map((instruction, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-red-500 font-medium">{idx + 1}.</span>
                              {instruction}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {completedExercises.length === selectedWorkoutPlan.exercises.length && (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                <Trophy className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-green-800 mb-2">Workout Complete! 🎉</h4>
                <p className="text-green-700 mb-4">
                  Great job! You burned {selectedWorkoutPlan.totalCalories} calories in {selectedWorkoutPlan.duration}.
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => {
                  setSelectedWorkoutPlan(null);
                  setCompletedExercises([]);
                }}
                className="py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Change Workout
              </button>
              <button 
                onClick={() => {
                  // Reset for next session
                  setCompletedExercises([]);
                }}
                className="py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                Reset Progress
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Simplified versions of other render functions for space
  const renderProfile = () => (
    <div className="space-y-6 pb-24">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-6 text-center">Personal Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">Age</label>
            <input type="number" className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl" placeholder="25" />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">Height (cm)</label>
            <input type="number" className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl" placeholder="170" />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">Current Weight (kg)</label>
            <input type="number" className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl" placeholder="75" />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">Goal Weight (kg)</label>
            <input type="number" className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl" placeholder="65" />
          </div>
        </div>
        <button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard': return renderDashboard();
      case 'profile': return renderProfile();
      case 'meals': return renderMeals();
      case 'exercise': return renderExercise();
      case 'shopping': return renderShopping();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-First Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Me but better</h1>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Menu */}
      <div className={`fixed inset-0 z-40 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <nav className="p-4 space-y-2 overflow-y-auto h-full pb-32">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveMenu(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-4 text-left rounded-xl transition-colors ${
                    activeMenu === item.id
                      ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className={`w-6 h-6 ${activeMenu === item.id ? 'text-blue-600' : item.color}`} />
                  <span className="font-medium text-lg">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        {renderContent()}
      </div>

      {/* Bottom Navigation - Thumb Zone */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-pb">
        <div className="flex justify-around items-center">
          {[
            { id: 'dashboard', icon: Home, label: 'Home' },
            { id: 'meals', icon: UtensilsCrossed, label: 'Meals' },
            { id: 'exercise', icon: Dumbbell, label: 'Exercise' },
            { id: 'shopping', icon: ShoppingCart, label: 'Shopping' },
            { id: 'food-input', icon: Plus, label: 'Add Food' },
          ].map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id as MenuItem)}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-colors ${
                  activeMenu === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <IconComponent className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;