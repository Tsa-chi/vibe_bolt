import React, { useState, useEffect } from 'react';
import { 
  Home, User, Calculator, Dumbbell, UtensilsCrossed, ShoppingCart, 
  Plus, BarChart3, Award, Users, Settings, Camera, Target, 
  TrendingUp, Calendar, CheckCircle, Heart, Scale, Activity,
  Apple, Zap, Trophy, Star, Bell, Shield, ChevronUp,
  PlayCircle, BookOpen, Scan, Clock, MapPin, Menu, X,
  ArrowUp, Minus, MoreHorizontal
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
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showQuickActions, setShowQuickActions] = useState(false);
  
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
    { id: 'meals' as MenuItem, icon: UtensilsCrossed, label: 'Meals', color: 'text-orange-600' },
    { id: 'shopping' as MenuItem, icon: ShoppingCart, label: 'Shopping', color: 'text-teal-600' },
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