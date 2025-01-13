import React from 'react';
import DateTaskTracker from './DateTaskTracker';

const MorningRoutine = () => {
  return (
    <DateTaskTracker
      title="Morning Routine Tracker"
      initialData={[
        { date: '2024-10-01', tasks: [{ name: 'Yoga', duration: 30 }, { name: 'Healthy Breakfast', duration: 15 }] },
      ]}
    />
  );
};

export default MorningRoutine;
