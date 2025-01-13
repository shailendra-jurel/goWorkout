//  HomePage.jsx
import React, { useState } from 'react';
import GymSection from './GymSection';
import HomeExercises from './HomeExercises';
import MorningRoutine from './MorningRoutine';
import Meditation from './Meditation';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('gym');

  const renderSection = () => {
    switch (activeSection) {
      case 'gym':
        return <GymSection />;
      case 'homeWorkout':
        return <HomeExercises />;
      case 'morningRoutine':
        return <MorningRoutine />;
      case 'meditation':
        return <Meditation />;
      default:
        return <GymSection />;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Workout Tracker</h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveSection('gym')}
          className={`p-4 mx-2 ${activeSection === 'gym' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Gym
        </button>
        <button
          onClick={() => setActiveSection('homeWorkout')}
          className={`p-4 mx-2 ${activeSection === 'homeWorkout' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Home Workout
        </button>
        <button
          onClick={() => setActiveSection('morningRoutine')}
          className={`p-4 mx-2 ${activeSection === 'morningRoutine' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Morning Routine
        </button>
        <button
          onClick={() => setActiveSection('meditation')}
          className={`p-4 mx-2 ${activeSection === 'meditation' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Meditation
        </button>
      </div>

      <div>{renderSection()}</div>
    </div>
  );
};

export default HomePage;
