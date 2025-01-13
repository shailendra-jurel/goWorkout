import React from 'react';
import DateTaskTracker from './DateTaskTracker';

const GymSection = () => {
  return (
    <DateTaskTracker
      title="Gym Workout Tracker"
      initialData={[
        { date: '2024-10-01', tasks: [{ name: 'Cycling', duration: 30 }, { name: 'Bench Press', duration: 60 }, { name: 'Deadlift', duration: 45 }] },
      ]}
    />
  );
};

export default GymSection;
