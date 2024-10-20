import React, { useState } from 'react';
import GymSection from './components/GymSection';
import HomeWorkout from './components/HomeExercises';
import MorningRoutine from './components/MorningRoutine';
import Meditation from './components/Meditation';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('gym');

  const renderSection = () => {
    switch (activeSection) {
      case 'gym':
        return <GymSection />;
      case 'homeWorkout':
        return <HomeWorkout />;
      case 'morningRoutine':
        return <MorningRoutine />;
      case 'meditation':
        return <Meditation />;
      default:
        return <GymSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          My Workout Tracker
        </h1>
        <p className="text-lg text-gray-500">Track your daily workouts and progress effortlessly</p>
      </header>

      <nav className="flex justify-center mb-10 space-x-4">
        <button
          onClick={() => setActiveSection('gym')}
          className={`px-6 py-2 font-semibold text-lg rounded-full transition duration-300 ${
            activeSection === 'gym' ? 'bg-blue-700 text-white shadow-lg' : 'bg-white text-blue-700 border border-blue-700'
          }`}
        >
          Gym
        </button>
        <button
          onClick={() => setActiveSection('homeWorkout')}
          className={`px-6 py-2 font-semibold text-lg rounded-full transition duration-300 ${
            activeSection === 'homeWorkout' ? 'bg-green-700 text-white shadow-lg' : 'bg-white text-green-700 border border-green-700'
          }`}
        >
          Home Workout
        </button>
        <button
          onClick={() => setActiveSection('morningRoutine')}
          className={`px-6 py-2 font-semibold text-lg rounded-full transition duration-300 ${
            activeSection === 'morningRoutine' ? 'bg-yellow-600 text-white shadow-lg' : 'bg-white text-yellow-600 border border-yellow-600'
          }`}
        >
          Morning Routine
        </button>
        <button
          onClick={() => setActiveSection('meditation')}
          className={`px-6 py-2 font-semibold text-lg rounded-full transition duration-300 ${
            activeSection === 'meditation' ? 'bg-purple-700 text-white shadow-lg' : 'bg-white text-purple-700 border border-purple-700'
          }`}
        >
          Meditation
        </button>
      </nav>

      <main className="mx-auto max-w-6xl p-6 bg-white rounded-lg shadow-xl">
        {renderSection()}
      </main>
    </div>
  );
};

export default App;
