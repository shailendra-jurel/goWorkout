import React from 'react';
import DateTaskTracker from './DateTaskTracker';

const Meditation = () => {
  return (
    <DateTaskTracker
      title="Meditation Tracker"
      initialData={[
        { date: '2024-10-01', tasks: [{ name: 'Morning Meditation', duration: 30 }] },
      ]}
    />
  );
};

export default Meditation;
