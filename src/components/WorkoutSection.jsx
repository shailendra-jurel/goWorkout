//  WorkingSection.jsx 

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateWorkout } from '../store/actions';

const WorkoutSection = ({ title, exercises }) => {
  // Sample dates (you can change this or generate dynamically)
  const dates = ['2024-10-01', '2024-10-02', '2024-10-03', '2024-10-04'];
  
  // Initialize the state for each exercise on each date
  const [workoutData, setWorkoutData] = useState(
    JSON.parse(localStorage.getItem(title)) ||
    dates.map(date => ({
      date,
      targets: exercises.reduce((acc, exercise) => {
        acc[exercise.name] = ''; // Initialize empty targets
        return acc;
      }, {})
    }))
  );

  const dispatch = useDispatch();

  // Save to localStorage and update Redux store when workout data changes
  useEffect(() => {
    localStorage.setItem(title, JSON.stringify(workoutData));
    dispatch(updateWorkout(title, workoutData));
  }, [workoutData, dispatch, title]);

  // Handle input changes for each target
  const handleInputChange = (dateIndex, exercise, value) => {
    const updatedData = workoutData.map((item, idx) => {
      if (idx === dateIndex) {
        return {
          ...item,
          targets: { ...item.targets, [exercise]: value }
        };
      }
      return item;
    });
    setWorkoutData(updatedData);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Date</th>
            {exercises.map(exercise => (
              <th key={exercise.name} className="border px-4 py-2">
                {exercise.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {workoutData.map((item, dateIndex) => (
            <tr key={item.date}>
              <td className="border px-4 py-2">{item.date}</td>
              {exercises.map(exercise => (
                <td key={exercise.name} className="border px-4 py-2">
                  <input
                    type="text"
                    value={item.targets[exercise.name]}
                    onChange={(e) => handleInputChange(dateIndex, exercise.name, e.target.value)}
                    className="border p-2 w-full"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutSection;
