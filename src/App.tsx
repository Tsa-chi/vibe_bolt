import React, { useState, useEffect } from 'react';
import { 
  Home, User, Calculator, Dumbbell, UtensilsCrossed, ShoppingCart, 
  Plus, BarChart3, Award, Users, Settings, Camera, Target, 
  TrendingUp, Calendar, CheckCircle, Heart, Scale, Activity,
  Apple, Zap, Trophy, Star, Bell, Shield, ChevronUp,
  PlayCircle, BookOpen, Scan, Clock, MapPin, Menu, X,
  ArrowUp, Minus, MoreHorizontal, ChefHat, List, Droplets,
  Thermometer, AlertCircle, CheckCircle2, ArrowRight
} from 'lucide-react';

type MenuItem = 'dashboard' | 'profile' | 'macros' | 'exercise' | 'meals' | 'shopping' | 'food-input' | 'exercise-input' | 'health' | 'analysis' | 'rewards' | 'community' | 'settings' | 'meal-planner' | 'shopping-list';

interface DashboardStats {
  currentWeight: number;
  goalWeight: number;
  dailyCalories: number;
  caloriesConsumed: number;
  exerciseMinutes: number;
  exerciseGoal: number;
}

interface MacroGoals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface HealthData {
  weight: { value: number; unit: string; status: 'good' | 'warning' | 'danger'; lastUpdated: string };
  bloodPressure: { systolic: number; diastolic: number; status: 'good' | 'warning' | 'danger'; lastUpdated: string };
  bloodSugar: { value: number; unit: string; status: 'good' | 'warning' | 'danger'; lastUpdated: string };
}

interface MealPlan {
  id: string;
  name: string;
  duration: string;
  meals: Array<{
    day: string;
    breakfast: string;
    lunch: string;
    dinner: string;
    snacks: string[];
  }>;
  macros: MacroGoals;
  shoppingList: string[];
}
function App() {
  const [activeMenu, setActiveMenu] = useState<MenuItem>('dashboard');
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [selectedMealPlan, setSelectedMealPlan] = useState<MealPlan | null>(null);
  const [showMealPlanOptions, setShowMealPlanOptions] = useState(false);
  
  const [userStats] = useState<DashboardStats>({
    currentWeight: 75,
    goalWeight: 65,
    dailyCalories: 1800,
    caloriesConsumed: 1200,
    exerciseMinutes: 30,
    exerciseGoal: 45
  });

  const [macroGoals] = useState<MacroGoals>({
    calories: 1800,
    protein: 135,
    carbs: 180,
    fat: 60
  });

  const [healthData] = useState<HealthData>({
    weight: { value: 75, unit: 'kg', status: 'good', lastUpdated: '2 hours ago' },
    bloodPressure: { systolic: 125, diastolic: 82, status: 'warning', lastUpdated: '1 day ago' },
    bloodSugar: { value: 95, unit: 'mg/dL', status: 'good', lastUpdated: '3 hours ago' }
  });

  const mealPlanOptions = [
    { duration: '1 day', plans: [
      { id: '1d-1', name: 'Mediterranean Day', macros: { calories: 1800, protein: 135, carbs: 180, fat: 60 } },
      { id: '1d-2', name: 'High Protein Day', macros: { calories: 1800, protein: 160, carbs: 140, fat: 65 } }
    ]},
    { duration: '3 days', plans: [
      { id: '3d-1', name: 'Balanced 3-Day', macros: { calories: 1800, protein: 135, carbs: 180, fat: 60 } },
      { id: '3d-2', name: 'Low Carb 3-Day', macros: { calories: 1800, protein: 150, carbs: 100, fat: 85 } }
    ]},
    { duration: '1 week', plans: [
      { id: '1w-1', name: 'Weekly Variety', macros: { calories: 1800, protein: 135, carbs: 180, fat: 60 } },
      { id: '1w-2', name: 'Keto Week', macros: { calories: 1800, protein: 140, carbs: 50, fat: 140 } }
    ]},
    { duration: '2 weeks', plans: [
      { id: '2w-1', name: 'Transformation Plan', macros: { calories: 1700, protein: 140, carbs: 160, fat: 55 } },
      { id: '2w-2', name: 'Muscle Building', macros: { calories: 2000, protein: 180, carbs: 200, fat: 70 } }
    ]},
    { duration: '1 month', plans: [
      { id: '1m-1', name: 'Complete Lifestyle', macros: { calories: 1800, protein: 135, carbs: 180, fat: 60 } },
      { id: '1m-2', name: 'Athletic Performance', macros: { calories: 2200, protein: 200, carbs: 250, fat: 75 } }
    ]}
  ];
  // Auto-hide navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBottomNav(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const getHealthStatusColor = (status: 'good' | 'warning' | 'danger') => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'danger': return 'text-red-600 bg-red-50 border-red-200';
    }
  };

  const generateMealPlan = (planId: string, duration: string) => {
    // Mock meal plan generation based on macros
    const sampleMeals = {
      breakfast: ['Oatmeal with berries and almonds', 'Greek yogurt with granola', 'Scrambled eggs with avocado toast'],
      lunch: ['Grilled chicken salad', 'Quinoa bowl with vegetables', 'Salmon with sweet potato'],
      dinner: ['Lean beef with broccoli', 'Baked cod with asparagus', 'Turkey meatballs with zucchini noodles'],
      snacks: ['Apple with almond butter', 'Greek yogurt', 'Mixed nuts', 'Protein shake']
    };

    const days = duration === '1 day' ? 1 : duration === '3 days' ? 3 : duration === '1 week' ? 7 : duration === '2 weeks' ? 14 : 30;
    const meals = [];
    
    for (let i = 0; i < days; i++) {
      meals.push({
        day: `Day ${i + 1}`,
        breakfast: sampleMeals.breakfast[i % sampleMeals.breakfast.length],
        lunch: sampleMeals.lunch[i % sampleMeals.lunch.length],
        dinner: sampleMeals.dinner[i % sampleMeals.dinner.length],
        snacks: [sampleMeals.snacks[i % sampleMeals.snacks.length], sampleMeals.snacks[(i + 1) % sampleMeals.snacks.length]]
      });
    }

    const shoppingList = [
      'Chicken breast (2 lbs)', 'Salmon fillets (1 lb)', 'Greek yogurt (32 oz)',
      'Oats (1 container)', 'Mixed berries (2 cups)', 'Almonds (1 bag)',
      'Avocados (4 pieces)', 'Sweet potatoes (3 lbs)', 'Broccoli (2 heads)',
      'Quinoa (1 bag)', 'Eggs (1 dozen)', 'Spinach (1 bag)'
    ];

    return {
      id: planId,
      name: mealPlanOptions.find(opt => opt.plans.some(p => p.id === planId))?.plans.find(p => p.id === planId)?.name || 'Custom Plan',
      duration,
      meals,
      macros: mealPlanOptions.find(opt => opt.plans.some(p => p.id === planId))?.plans.find(p => p.id === planId)?.macros || macroGoals,
      shoppingList
    };
  };
  const primaryMenuItems = [
    { id: 'dashboard' as MenuItem, icon: Home, label: 'Home', color: 'text-blue-600' },
    { id: 'food-input' as MenuItem, icon: Plus, label: 'Add Food', color: 'text-green-600' },
    { id: 'exercise-input' as MenuItem, icon: Activity, label: 'Exercise', color: 'text-red-600' },
    { id: 'analysis' as MenuItem, icon: BarChart3, label: 'Progress', color: 'text-purple-600' },
  ];

  const secondaryMenuItems = [
    { id: 'profile' as MenuItem, icon: User, label: 'Profile', color: 'text-gray-600' },
    { id: 'macros' as MenuItem, icon: Calculator, label: 'Macros', color: 'text-green-600' },
    { id: 'exercise' as MenuItem, icon: Dumbbell, label: 'Workouts', color: 'text-red-600' },
    { id: 'meal-planner' as MenuItem, icon: ChefHat, label: 'Meal Plans', color: 'text-orange-600' },
    { id: 'shopping-list' as MenuItem, icon: ShoppingCart, label: 'Shopping', color: 'text-teal-600' },
    { id: 'health' as MenuItem, icon: Heart, label: 'Health', color: 'text-rose-600' },
    { id: 'rewards' as MenuItem, icon: Award, label: 'Rewards', color: 'text-amber-600' },
    { id: 'community' as MenuItem, icon: Users, label: 'Community', color: 'text-cyan-600' },
    { id: 'settings' as MenuItem, icon: Settings, label: 'Settings', color: 'text-gray-600' },
  ];

  const QuickActionButton = ({ icon: Icon, label, onClick, color = "bg-blue-500" }: {
    icon: any;
    label: string;
    onClick: () => void;
    color?: string;
  }) => (
    <button
      onClick={onClick}
      className={`${color} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 min-w-[64px] min-h-[64px] flex flex-col items-center justify-center`}
    >
      <Icon className="w-6 h-6 mb-1" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );

  const renderDashboard = () => (
    <div className="space-y-6 pb-32">
      {/* Health Data - Color coded */}
      <div className="mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Health Overview</h3>
          <button 
            onClick={() => setActiveMenu('health')}
            className="text-blue-600 text-sm font-medium flex items-center gap-1"
          >
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className={`p-4 rounded-xl border-2 ${getHealthStatusColor(healthData.weight.status)}`}>
            <Scale className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold">{healthData.weight.value}</p>
            <p className="text-xs opacity-75">{healthData.weight.unit}</p>
          </div>
          <div className={`p-4 rounded-xl border-2 ${getHealthStatusColor(healthData.bloodPressure.status)}`}>
            <Heart className="w-6 h-6 mb-2" />
            <p className="text-lg font-bold">{healthData.bloodPressure.systolic}/{healthData.bloodPressure.diastolic}</p>
            <p className="text-xs opacity-75">mmHg</p>
          </div>
          <div className={`p-4 rounded-xl border-2 ${getHealthStatusColor(healthData.bloodSugar.status)}`}>
            <Droplets className="w-6 h-6 mb-2" />
            <p className="text-lg font-bold">{healthData.bloodSugar.value}</p>
            <p className="text-xs opacity-75">{healthData.bloodSugar.unit}</p>
          </div>
        </div>
      </div>

      {/* Meal Planning Quick Access */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white mx-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Smart Meal Planning</h3>
            <p className="text-orange-100 text-sm mb-4">Create personalized menus based on your macros</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center ml-4">
            <ChefHat className="w-8 h-8" />
          </div>
        </div>
        <button 
          onClick={() => setActiveMenu('meal-planner')}
          className="w-full bg-white text-orange-600 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2 text-lg"
        >
          <ChefHat className="w-5 h-5" />
          Create Menu
        </button>
      </div>
      {/* AI Photo Feature - Thumb-friendly positioning */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white mx-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">See Your Future Self</h3>
            <p className="text-purple-100 text-sm mb-4">AI visualization of you 10kg slimmer</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center ml-4">
            <Camera className="w-8 h-8" />
          </div>
        </div>
        <button className="w-full bg-white text-purple-600 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 text-lg">
          <Camera className="w-5 h-5" />
          Generate Photo
        </button>
        <p className="text-xs text-purple-200 mt-3 text-center">
          *AI-generated images are for visualization purposes only
        </p>
      </div>

      {/* Quick Stats - Large touch targets */}
      <div className="grid grid-cols-2 gap-4 mx-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <Scale className="w-8 h-8 text-blue-600" />
            <span className="text-sm text-gray-500">Weight</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{userStats.currentWeight}kg</p>
          <p className="text-sm text-gray-600 mt-1">Goal: {userStats.goalWeight}kg</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <Apple className="w-8 h-8 text-green-600" />
            <span className="text-sm text-gray-500">Calories</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{userStats.caloriesConsumed}</p>
          <p className="text-sm text-gray-600 mt-1">of {userStats.dailyCalories}</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <Activity className="w-8 h-8 text-red-600" />
            <span className="text-sm text-gray-500">Exercise</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{userStats.exerciseMinutes}min</p>
          <p className="text-sm text-gray-600 mt-1">of {userStats.exerciseGoal}min</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <Target className="w-8 h-8 text-purple-600" />
            <span className="text-sm text-gray-500">Progress</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">73%</p>
          <p className="text-sm text-gray-600 mt-1">to goal</p>
        </div>
      </div>

      {/* Progress Chart - Swipeable */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mx-4">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          Weight Progress
        </h3>
        <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center">
          <p className="text-gray-500">Weight tracking chart</p>
        </div>
      </div>

      {/* Daily Tips - Swipeable cards */}
      <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-6 text-white mx-4">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <Zap className="w-6 h-6" />
          Today's Tip
        </h3>
        <p className="text-green-100 text-lg leading-relaxed">
          "Drink a glass of water before each meal to help with portion control and hydration."
        </p>
      </div>
    </div>
  );

  const renderMealPlanner = () => (
    <div className="space-y-6 pb-32">
      <div className="mx-4">
        <h2 className="text-2xl font-bold mb-2">Meal Planner</h2>
        <p className="text-gray-600 mb-6">Create personalized meal plans based on your macro goals</p>
        
        {/* Current Macros */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Your Macro Goals</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <p className="text-2xl font-bold text-blue-600">{macroGoals.calories}</p>
              <p className="text-sm text-gray-600">Calories</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-xl">
              <p className="text-2xl font-bold text-green-600">{macroGoals.protein}g</p>
              <p className="text-sm text-gray-600">Protein</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-xl">
              <p className="text-2xl font-bold text-orange-600">{macroGoals.carbs}g</p>
              <p className="text-sm text-gray-600">Carbs</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-xl">
              <p className="text-2xl font-bold text-purple-600">{macroGoals.fat}g</p>
              <p className="text-sm text-gray-600">Fat</p>
            </div>
          </div>
        </div>

        {/* Duration Selection */}
        <div className="space-y-4">
          {mealPlanOptions.map((option) => (
            <div key={option.duration} className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 capitalize">{option.duration} Plans</h3>
              <div className="space-y-3">
                {option.plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => {
                      const fullPlan = generateMealPlan(plan.id, option.duration);
                      setSelectedMealPlan(fullPlan);
                      setActiveMenu('meals');
                    }}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all text-left"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{plan.name}</h4>
                      <ChefHat className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-sm">
                      <span className="text-blue-600">{plan.macros.calories} cal</span>
                      <span className="text-green-600">{plan.macros.protein}g P</span>
                      <span className="text-orange-600">{plan.macros.carbs}g C</span>
                      <span className="text-purple-600">{plan.macros.fat}g F</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMeals = () => (
    <div className="space-y-6 pb-32">
      {selectedMealPlan ? (
        <div className="mx-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">{selectedMealPlan.name}</h2>
              <p className="text-gray-600">{selectedMealPlan.duration} meal plan</p>
            </div>
            <button
              onClick={() => setActiveMenu('shopping-list')}
              className="bg-teal-500 text-white px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <List className="w-4 h-4" />
              Shopping List
            </button>
          </div>

          <div className="space-y-4">
            {selectedMealPlan.meals.map((meal, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">{meal.day}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Breakfast</p>
                      <p className="text-gray-600">{meal.breakfast}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Lunch</p>
                      <p className="text-gray-600">{meal.lunch}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Dinner</p>
                      <p className="text-gray-600">{meal.dinner}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Snacks</p>
                      <p className="text-gray-600">{meal.snacks.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-4 text-center py-12">
          <ChefHat className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Meal Plan Selected</h3>
          <p className="text-gray-600 mb-6">Create a meal plan to see your personalized menu</p>
          <button
            onClick={() => setActiveMenu('meal-planner')}
            className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Create Meal Plan
          </button>
        </div>
      )}
    </div>
  );

  const renderShoppingList = () => (
    <div className="space-y-6 pb-32">
      <div className="mx-4">
        <h2 className="text-2xl font-bold mb-6">Shopping List</h2>
        
        {selectedMealPlan ? (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">For: {selectedMealPlan.name}</h3>
                <span className="text-sm text-gray-500">{selectedMealPlan.duration}</span>
              </div>
              
              <div className="space-y-3">
                {selectedMealPlan.shoppingList.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl">
                    <input type="checkbox" className="w-5 h-5 text-teal-600 rounded" />
                    <span className="flex-1">{item}</span>
                    <ShoppingCart className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex gap-3">
                  <button className="flex-1 bg-teal-500 text-white py-3 rounded-xl font-semibold">
                    Export List
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Shopping List</h3>
            <p className="text-gray-600 mb-6">Create a meal plan first to generate your shopping list</p>
            <button
              onClick={() => setActiveMenu('meal-planner')}
              className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Create Meal Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderHealth = () => (
    <div className="space-y-6 pb-32">
      <div className="mx-4">
        <h2 className="text-2xl font-bold mb-6">Health Data</h2>
        
        {/* Detailed Health Metrics */}
        <div className="space-y-4">
          <div className={`p-6 rounded-2xl border-2 ${getHealthStatusColor(healthData.weight.status)}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Scale className="w-8 h-8" />
                <div>
                  <h3 className="text-lg font-semibold">Weight</h3>
                  <p className="text-sm opacity-75">Last updated: {healthData.weight.lastUpdated}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">{healthData.weight.value}</p>
                <p className="text-sm opacity-75">{healthData.weight.unit}</p>
              </div>
            </div>
            <button className="w-full bg-white/50 py-3 rounded-xl font-semibold">
              Update Weight
            </button>
          </div>

          <div className={`p-6 rounded-2xl border-2 ${getHealthStatusColor(healthData.bloodPressure.status)}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8" />
                <div>
                  <h3 className="text-lg font-semibold">Blood Pressure</h3>
                  <p className="text-sm opacity-75">Last updated: {healthData.bloodPressure.lastUpdated}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{healthData.bloodPressure.systolic}/{healthData.bloodPressure.diastolic}</p>
                <p className="text-sm opacity-75">mmHg</p>
              </div>
            </div>
            <button className="w-full bg-white/50 py-3 rounded-xl font-semibold">
              Update Blood Pressure
            </button>
          </div>

          <div className={`p-6 rounded-2xl border-2 ${getHealthStatusColor(healthData.bloodSugar.status)}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Droplets className="w-8 h-8" />
                <div>
                  <h3 className="text-lg font-semibold">Blood Sugar</h3>
                  <p className="text-sm opacity-75">Last updated: {healthData.bloodSugar.lastUpdated}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">{healthData.bloodSugar.value}</p>
                <p className="text-sm opacity-75">{healthData.bloodSugar.unit}</p>
              </div>
            </div>
            <button className="w-full bg-white/50 py-3 rounded-xl font-semibold">
              Update Blood Sugar
            </button>
          </div>
        </div>

        {/* Health Status Legend */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mt-6">
          <h3 className="text-lg font-semibold mb-4">Status Indicators</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>Good - Within healthy range</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span>Warning - Monitor closely</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span>Danger - Consult healthcare provider</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const renderFoodInput = () => (
    <div className="space-y-6 pb-32">
      {/* Quick Add Buttons - Large, thumb-friendly */}
      <div className="grid grid-cols-2 gap-4 mx-4">
        <button className="bg-green-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95">
          <Scan className="w-8 h-8 mb-2 mx-auto" />
          <span className="text-lg font-semibold">Scan Barcode</span>
        </button>
        <button className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95">
          <Camera className="w-8 h-8 mb-2 mx-auto" />
          <span className="text-lg font-semibold">Photo Food</span>
        </button>
      </div>

      {/* Search - Large input */}
      <div className="mx-4">
        <input 
          type="text" 
          placeholder="Search food..." 
          className="w-full p-6 text-lg border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Quick Add from Plan - Large touch targets */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mx-4">
        <h3 className="text-xl font-semibold mb-4">Quick Add from Plan</h3>
        <div className="space-y-3">
          {['Breakfast: Oatmeal with berries', 'Lunch: Grilled chicken salad', 'Snack: Greek yogurt'].map(item => (
            <button key={item} className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors">
              <div className="w-6 h-6 border-2 border-gray-300 rounded-md flex-shrink-0"></div>
              <span className="text-lg flex-1 text-left">{item}</span>
              <Plus className="w-6 h-6 text-green-500 flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* Recent & Favorites - Grid layout */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mx-4">
        <h3 className="text-xl font-semibold mb-4">Recent & Favorites</h3>
        <div className="grid grid-cols-2 gap-3">
          {['Apple', 'Chicken Breast', 'Brown Rice', 'Almonds', 'Salmon', 'Broccoli'].map(food => (
            <button key={food} className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors">
              <span className="font-semibold text-lg block">{food}</span>
              <p className="text-sm text-gray-500 mt-1">Tap to add</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard': return renderDashboard();
      case 'meal-planner': return renderMealPlanner();
      case 'meals': return renderMeals();
      case 'shopping-list': return renderShoppingList();
      case 'health': return renderHealth();
      case 'food-input': return renderFoodInput();
      case 'exercise-input': return (
        <div className="space-y-6 pb-32 mx-4">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Exercise Entry</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-red-500 text-white p-6 rounded-xl">
                <Dumbbell className="w-8 h-8 mb-2 mx-auto" />
                <span className="text-lg font-semibold">Strength</span>
              </button>
              <button className="bg-orange-500 text-white p-6 rounded-xl">
                <Activity className="w-8 h-8 mb-2 mx-auto" />
                <span className="text-lg font-semibold">Cardio</span>
              </button>
            </div>
          </div>
        </div>
      );
      case 'analysis': return (
        <div className="space-y-6 pb-32 mx-4">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Weekly Progress</h3>
            <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">Progress charts</p>
            </div>
          </div>
        </div>
      );
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Minimal, thumb-friendly */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">OneHand Health</h1>
            </div>
            <button 
              onClick={() => setShowQuickActions(!showQuickActions)}
              className="p-3 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
            >
              <MoreHorizontal className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {renderContent()}
      </main>

      {/* Quick Actions Overlay */}
      {showQuickActions && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
              <button 
                onClick={() => setShowQuickActions(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {secondaryMenuItems.slice(0, 6).map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveMenu(item.id);
                      setShowQuickActions(false);
                    }}
                    className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <IconComponent className={`w-6 h-6 ${item.color} mb-2`} />
                    <span className="text-xs font-medium text-gray-700">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation - Thumb Zone Optimized */}
      <nav className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 transition-transform duration-300 z-30 ${
        showBottomNav ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="px-4 py-2">
          <div className="flex justify-around items-center">
            {primaryMenuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeMenu === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 min-w-[64px] ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 scale-105'
                      : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                >
                  <IconComponent className={`w-6 h-6 mb-1 ${isActive ? 'text-blue-600' : item.color}`} />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Thumb Rest Indicator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </nav>

      {/* Floating Action Button - Positioned for thumb reach */}
      <button
        onClick={() => setShowQuickActions(!showQuickActions)}
        className={`fixed bottom-24 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 ${
          showBottomNav ? 'translate-y-0' : 'translate-y-16'
        }`}
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Scroll to Top - Positioned for thumb reach */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 left-6 bg-gray-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}

export default App;