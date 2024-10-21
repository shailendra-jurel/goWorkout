import React from 'react';
import DateTaskTracker from './DateTaskTracker';

const HomeWorkout = () => {
  return (
    <DateTaskTracker
      title="Home Workout Tracker"
      initialData={[
        { date: '2024-10-01', tasks: [{ name: 'Push-ups', duration: 20 }] },
      ]}
    />
  );
};

export default HomeWorkout;
