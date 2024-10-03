// MorningRoutine.jsx
import React from 'react';
import WorkoutSection from './WorkoutSection';

const morningRoutineExercises = ['Wake Up Time', 'Running Distance', 'Study Hours', 'Yoga'];

const MorningRoutine = () => (
  <WorkoutSection title="Morning Routine" sectionType="morningRoutine" exercises={morningRoutineExercises} />
);

export default MorningRoutine;

// GymSection.jsx
import React from 'react';
import WorkoutSection from './WorkoutSection';

const gymExercises = ['Cycling', 'Bench Press', 'Leg Press', 'Extensions', 'Deadlift', 'Pull Ups', 'Butterfly'];

const GymSection = () => (
  <WorkoutSection title="Gym Exercises" sectionType="gym" exercises={gymExercises} />
);

export default GymSection;

// HomeExercises.jsx
import React from 'react';
import WorkoutSection from './WorkoutSection';

const homeExercises = ['Push Ups', 'Crunches', 'Squats', 'Planks', 'Lunges'];

const HomeExercises = () => (
  <WorkoutSection title="Home Exercises" sectionType="homeExercises" exercises={homeExercises} />
);

export default HomeExercises;

// Meditation.jsx
import React from 'react';
import WorkoutSection from './WorkoutSection';

const meditationExercises = ['Breathing Exercise', 'Body Scan', 'Loving-Kindness', 'Mindfulness'];

const Meditation = () => (
  <WorkoutSection title="Meditation" sectionType="meditation" exercises={meditationExercises} />
);

export default Meditation;