import React, { useState } from 'react';
import { 
  Home, User, Calculator, Dumbbell, UtensilsCrossed, ShoppingCart, 
  Plus, BarChart3, Award, Users, Settings, Camera, Target, 
  TrendingUp, Calendar, CheckCircle, Heart, Scale, Activity,
  Apple, Zap, Trophy, Star, Bell, Shield, ChevronRight,
  PlayCircle, BookOpen, Scan, Clock, MapPin
} from 'lucide-react';

type MenuItem = 'dashboard' | 'profile' | 'macros' | 'exercise' | 'meals' | 'shopping' | 'food-input' | 'exercise-input' | 'health' | 'analysis' | 'rewards' | 'community' | 'settings';

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

function App() {
  const [activeMenu, setActiveMenu] = useState<MenuItem>('dashboard');
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

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* AI Photo Feature */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">See Your Future Self</h3>
            <p className="text-purple-100 mb-4">AI-generated visualization of you 10kg slimmer</p>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Generate Photo
            </button>
          </div>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Camera className="w-10 h-10" />
          </div>
        </div>
        <p className="text-xs text-purple-200 mt-4">
          *AI-generated images are for visualization purposes only and may not accurately represent actual results.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Scale className="w-6 h-6 text-blue-600" />
            <span className="text-xs text-gray-500">Current</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{userStats.currentWeight}kg</p>
          <p className="text-sm text-gray-600">Goal: {userStats.goalWeight}kg</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Apple className="w-6 h-6 text-green-600" />
            <span className="text-xs text-gray-500">Calories</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{userStats.caloriesConsumed}</p>
          <p className="text-sm text-gray-600">of {userStats.dailyCalories}</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-6 h-6 text-red-600" />
            <span className="text-xs text-gray-500">Exercise</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{userStats.exerciseMinutes}min</p>
          <p className="text-sm text-gray-600">of {userStats.exerciseGoal}min</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-6 h-6 text-purple-600" />
            <span className="text-xs text-gray-500">Progress</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {Math.round(((userStats.currentWeight - userStats.goalWeight) / (userStats.currentWeight - userStats.goalWeight)) * 100)}%
          </p>
          <p className="text-sm text-gray-600">to goal</p>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Weight Progress
        </h3>
        <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Weight tracking chart will appear here</p>
        </div>
      </div>

      {/* Daily Tips */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white">
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

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="25" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="170" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Weight (kg)</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="75" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Goal Weight (kg)</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="65" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Body Measurements (Optional)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Waist (cm)</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Chest (cm)</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hips (cm)</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-600" />
          Privacy & Security
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Data Encryption</span>
            <span className="text-green-600 font-medium">Enabled</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Photo Processing</span>
            <span className="text-green-600 font-medium">Secure</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Data Sharing</span>
            <button className="text-blue-600 hover:text-blue-700">Manage</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMacros = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Daily Macro Goals</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Calories</span>
                <span className="text-blue-600 font-bold">{macroGoals.calories}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Protein (g)</span>
                <span className="text-green-600 font-bold">{macroGoals.protein}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Carbs (g)</span>
                <span className="text-orange-600 font-bold">{macroGoals.carbs}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-orange-500 h-3 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Fat (g)</span>
                <span className="text-purple-600 font-bold">{macroGoals.fat}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-500 h-3 rounded-full" style={{ width: '52%' }}></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Understanding Macros</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Protein:</strong> Builds and repairs muscle tissue</p>
              <p><strong>Carbs:</strong> Primary energy source for your body</p>
              <p><strong>Fat:</strong> Essential for hormone production and nutrient absorption</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Adjust Goals</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Date</label>
            <input type="date" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Event</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Wedding, vacation, etc." />
          </div>
        </div>
      </div>
    </div>
  );

  const renderMeals = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Weekly Meal Plan</h3>
        <div className="grid md:grid-cols-7 gap-2 mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-center p-2 bg-gray-50 rounded-lg">
              <span className="font-medium text-sm">{day}</span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map(meal => (
            <div key={meal} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2">{meal}</h4>
              <p className="text-gray-600 text-sm">Click to plan your {meal.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <Star className="w-5 h-5" />
          Cheat Meal Planner
        </h3>
        <p className="text-yellow-100 mb-4">Plan your weekly treat without guilt!</p>
        <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
          Plan Cheat Meal
        </button>
        <p className="text-xs text-yellow-200 mt-3">
          Occasional indulgences are part of a balanced lifestyle and can help you stay on track long-term.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Dietary Preferences</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {['Vegetarian', 'Vegan', 'Gluten-Free', 'Keto', 'Mediterranean', 'Low-Carb'].map(diet => (
            <label key={diet} className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">{diet}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderShopping = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Shopping List</h3>
          <select className="p-2 border border-gray-300 rounded-lg">
            <option>1 Day</option>
            <option>3 Days</option>
            <option>1 Week</option>
          </select>
        </div>
        
        <div className="space-y-4">
          {['Produce', 'Proteins', 'Dairy', 'Grains', 'Pantry'].map(section => (
            <div key={section} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                {section}
              </h4>
              <div className="space-y-2">
                {['Item 1', 'Item 2', 'Item 3'].map(item => (
                  <label key={item} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">{item}</span>
                    <span className="text-xs text-gray-500 ml-auto">2x</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFoodInput = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Quick Add from Plan</h3>
          <div className="space-y-3">
            {['Breakfast: Oatmeal with berries', 'Lunch: Grilled chicken salad', 'Snack: Greek yogurt'].map(item => (
              <label key={item} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <input type="checkbox" className="rounded" />
                <span className="text-sm flex-1">{item}</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Manual Entry</h3>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Search food..." 
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Scan className="w-4 h-4" />
              Scan Barcode
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Recent & Favorites</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {['Apple', 'Chicken Breast', 'Brown Rice', 'Almonds', 'Salmon', 'Broccoli'].map(food => (
            <button key={food} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
              <span className="font-medium">{food}</span>
              <p className="text-xs text-gray-500">Tap to add</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderExercise = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Weekly Exercise Plan</h3>
        <div className="grid md:grid-cols-7 gap-2 mb-6">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-sm block">{day}</span>
              <span className="text-xs text-gray-500">Rest</span>
            </div>
          ))}
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <PlayCircle className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-semibold">Cardio Workout</h4>
                <p className="text-sm text-gray-600">30 minutes</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Dumbbell className="w-6 h-6 text-red-600" />
              <div>
                <h4 className="font-semibold">Strength Training</h4>
                <p className="text-sm text-gray-600">45 minutes</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-green-600" />
          Video Tutorials
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {['Beginner Yoga', 'HIIT Workout', 'Strength Training', 'Stretching'].map(video => (
            <div key={video} className="relative bg-gray-100 rounded-lg p-4 hover:bg-gray-200 cursor-pointer">
              <PlayCircle className="w-8 h-8 text-blue-600 mb-2" />
              <h4 className="font-medium">{video}</h4>
              <p className="text-sm text-gray-600">15 min</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHealth = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Daily Health Tracking</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="75.0" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Blood Pressure</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="120/80" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Blood Sugar</label>
            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="90" />
          </div>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Save Today's Data
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Progress Graphs</h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Health tracking charts will appear here</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <Bell className="w-5 h-5 text-blue-600" />
          Daily Reminders
        </h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" defaultChecked />
            <span className="text-sm">Morning weigh-in (8:00 AM)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" defaultChecked />
            <span className="text-sm">Evening health check (8:00 PM)</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderAnalysis = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Weekly Analysis</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            AI-Generated Insights
          </h4>
          <div className="space-y-3 text-sm">
            <p><strong>Most Significant Factor:</strong> Your consistent morning workouts contributed to 70% of your weekly progress.</p>
            <p><strong>Improvement Area:</strong> Consider increasing protein intake by 15g daily to optimize muscle recovery.</p>
            <p><strong>Plateau Prevention:</strong> Your body may adapt to current routine in 2 weeks. We'll suggest variations then.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Personalized Recommendations</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-medium text-green-700">Nutrition Adjustment</h4>
            <p className="text-sm text-gray-600">Based on your progress, consider adding 200 calories on workout days.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-medium text-blue-700">Exercise Variation</h4>
            <p className="text-sm text-gray-600">Try incorporating resistance bands to challenge your muscles differently.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-medium text-purple-700">Recovery Focus</h4>
            <p className="text-sm text-gray-600">Your sleep quality affects 40% of your results. Aim for 7-8 hours nightly.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Weekly Questionnaire</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How was your energy level this week?</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg">
              <option>Very High</option>
              <option>High</option>
              <option>Moderate</option>
              <option>Low</option>
              <option>Very Low</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Any challenges faced?</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows={3} placeholder="Share your experience..."></textarea>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRewards = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <Trophy className="w-6 h-6" />
          Current Status
        </h3>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <p className="text-2xl font-bold">1,250</p>
            <p className="text-yellow-100">Points Earned</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">7</p>
            <p className="text-yellow-100">Badges</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">Gold</p>
            <p className="text-yellow-100">Current Tier</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Available Rewards</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: 'Healthy Recipe Book', points: 500, available: true },
            { name: '20% Off Supplements', points: 750, available: true },
            { name: 'Personal Trainer Session', points: 1000, available: false },
            { name: 'Premium Features (1 Month)', points: 1200, available: false }
          ].map(reward => (
            <div key={reward.name} className={`p-4 border rounded-lg ${reward.available ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
              <h4 className="font-medium">{reward.name}</h4>
              <p className="text-sm text-gray-600">{reward.points} points</p>
              <button 
                className={`mt-2 px-4 py-2 rounded-lg text-sm font-medium ${
                  reward.available 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!reward.available}
              >
                {reward.available ? 'Redeem' : 'Locked'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Achievements</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'First Week', icon: '🎯', earned: true },
            { name: 'Consistency King', icon: '👑', earned: true },
            { name: 'Macro Master', icon: '🥗', earned: false },
            { name: 'Exercise Expert', icon: '💪', earned: false },
            { name: 'Goal Crusher', icon: '🏆', earned: false },
            { name: 'Community Helper', icon: '🤝', earned: false }
          ].map(achievement => (
            <div key={achievement.name} className={`text-center p-4 rounded-lg ${achievement.earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50 border border-gray-200'}`}>
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h4 className={`font-medium ${achievement.earned ? 'text-yellow-700' : 'text-gray-500'}`}>
                {achievement.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-purple-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-purple-600" />
          Referral Program
        </h3>
        <p className="text-gray-600 mb-4">Invite friends and earn rewards together!</p>
        <div className="flex gap-4">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Invite Friends
          </button>
          <div className="text-sm text-purple-600">
            <p>Successful referrals: <strong>2</strong></p>
            <p>Bonus earned: <strong>1 month free</strong></p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard': return renderDashboard();
      case 'profile': return renderProfile();
      case 'macros': return renderMacros();
      case 'exercise': return renderExercise();
      case 'meals': return renderMeals();
      case 'shopping': return renderShopping();
      case 'food-input': return renderFoodInput();
      case 'health': return renderHealth();
      case 'analysis': return renderAnalysis();
      case 'rewards': return renderRewards();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Me but better</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                      activeMenu === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${activeMenu === item.id ? 'text-blue-600' : item.color}`} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Subscription Prompt */}
            <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
              <h3 className="font-semibold mb-2">Upgrade to Premium</h3>
              <p className="text-sm text-purple-100 mb-3">Unlock AI photo generation, advanced analytics, and more!</p>
              <button className="w-full bg-white text-purple-600 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                Try Free
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;