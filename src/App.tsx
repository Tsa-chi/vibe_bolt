import React, { useState } from 'react';
import { Target, TrendingUp, Calendar, CheckCircle, Plus, Star, Award, Brain, Heart, Zap } from 'lucide-react';

function App() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Exercise 30 minutes daily', category: 'Health', progress: 75, completed: false },
    { id: 2, title: 'Read 2 books this month', category: 'Learning', progress: 40, completed: false },
    { id: 3, title: 'Meditate for 10 minutes', category: 'Mindfulness', progress: 90, completed: false },
  ]);

  const [newGoal, setNewGoal] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Health');

  const categories = [
    { name: 'Health', icon: Heart, color: 'bg-red-500', lightColor: 'bg-red-50' },
    { name: 'Learning', icon: Brain, color: 'bg-blue-500', lightColor: 'bg-blue-50' },
    { name: 'Mindfulness', icon: Star, color: 'bg-purple-500', lightColor: 'bg-purple-50' },
    { name: 'Career', icon: TrendingUp, color: 'bg-green-500', lightColor: 'bg-green-50' },
    { name: 'Productivity', icon: Zap, color: 'bg-yellow-500', lightColor: 'bg-yellow-50' },
  ];

  const addGoal = () => {
    if (newGoal.trim()) {
      const goal = {
        id: Date.now(),
        title: newGoal,
        category: selectedCategory,
        progress: 0,
        completed: false,
      };
      setGoals([...goals, goal]);
      setNewGoal('');
    }
  };

  const toggleGoal = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id 
        ? { ...goal, completed: !goal.completed, progress: goal.completed ? goal.progress : 100 }
        : goal
    ));
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.icon : Target;
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : 'bg-gray-500';
  };

  const getCategoryLightColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.lightColor : 'bg-gray-50';
  };

  const completedGoals = goals.filter(goal => goal.completed).length;
  const totalGoals = goals.length;
  const overallProgress = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Me but better</h1>
            <p className="text-xl text-gray-600">Transform yourself, one goal at a time</p>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{completedGoals}</h3>
              <p className="text-gray-600">Goals Completed</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{totalGoals}</h3>
              <p className="text-gray-600">Total Goals</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{overallProgress}%</h3>
              <p className="text-gray-600">Overall Progress</p>
            </div>
          </div>

          {/* Add New Goal */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Goal</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                placeholder="What do you want to achieve?"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && addGoal()}
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button
                onClick={addGoal}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Goal
              </button>
            </div>
          </div>

          {/* Goals List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Goals</h2>
            {goals.map(goal => {
              const IconComponent = getCategoryIcon(goal.category);
              return (
                <div
                  key={goal.id}
                  className={`bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl ${
                    goal.completed ? 'opacity-75' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${getCategoryLightColor(goal.category)} rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${getCategoryColor(goal.category).replace('bg-', 'text-')}`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold ${goal.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                          {goal.title}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(goal.category)} text-white`}>
                          {goal.category}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleGoal(goal.id)}
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                        goal.completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 hover:border-green-500'
                      }`}
                    >
                      {goal.completed && <CheckCircle className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${getCategoryColor(goal.category)}`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {goals.length === 0 && (
            <div className="text-center py-12">
              <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No goals yet</h3>
              <p className="text-gray-500">Add your first goal to start your journey of improvement!</p>
            </div>
          )}
        </div>
      </section>

      {/* Motivational Footer */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Every small step counts</h2>
          <p className="text-xl text-indigo-100 mb-6">
            Progress, not perfection. You're already better than yesterday.
          </p>
          <div className="flex justify-center items-center gap-2">
            <Star className="w-6 h-6 text-yellow-300" />
            <span className="text-lg font-semibold">Keep going, you've got this!</span>
            <Star className="w-6 h-6 text-yellow-300" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;