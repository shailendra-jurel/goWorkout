import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const HomeWorkout = () => {
  const [data, setData] = useState([
    { date: '2024-10-01', exercises: [{ name: 'Push-ups', reps: 20 }, { name: 'Squats', reps: 30 }] },
  ]);

  const addNewDate = () => {
    setData([...data, { date: new Date().toISOString().substring(0, 10), exercises: [] }]);
  };

  const addExercise = (index) => {
    const updatedData = [...data];
    updatedData[index].exercises.push({ name: '', reps: 0 });
    setData(updatedData);
  };

  const handleDateChange = (index, value) => {
    const updatedData = [...data];
    updatedData[index].date = value;
    setData(updatedData);
  };

  const handleExerciseChange = (dateIndex, exerciseIndex, field, value) => {
    const updatedData = [...data];
    updatedData[dateIndex].exercises[exerciseIndex][field] = value;
    setData(updatedData);
  };

  const removeExercise = (dateIndex, exerciseIndex) => {
    const updatedData = [...data];
    updatedData[dateIndex].exercises.splice(exerciseIndex, 1);
    setData(updatedData);
  };

  const removeDate = (dateIndex) => {
    const updatedData = [...data];
    updatedData.splice(dateIndex, 1);
    setData(updatedData);
  };

  return (
    <div className="home-workout-section max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-800 text-center">Home Workout Tracker</h2>
      {data.map((row, dateIndex) => (
        <div key={dateIndex} className="mb-10 bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <label className="block text-xl font-semibold text-gray-700">Date:</label>
            <input
              type="date"
              value={row.date}
              onChange={(e) => handleDateChange(dateIndex, e.target.value)}
              className="p-3 text-gray-700 rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <button
              onClick={() => removeDate(dateIndex)}
              className="ml-4 text-red-600 hover:text-red-800 transition duration-300"
            >
              <FaTrash className="w-5 h-5" />
            </button>
          </div>

          <h3 className="text-lg font-semibold text-gray-600 mb-4">Exercises:</h3>
          {row.exercises.map((exercise, exerciseIndex) => (
            <div key={exerciseIndex} className="flex mb-4 items-center">
              <input
                type="text"
                value={exercise.name}
                onChange={(e) => handleExerciseChange(dateIndex, exerciseIndex, 'name', e.target.value)}
                placeholder="Exercise Name"
                className="flex-1 p-3 mr-2 rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <input
                type="number"
                value={exercise.reps}
                onChange={(e) => handleExerciseChange(dateIndex, exerciseIndex, 'reps', e.target.value)}
                placeholder="Reps"
                className="flex-1 p-3 rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <button
                onClick={() => removeExercise(dateIndex, exerciseIndex)}
                className="ml-4 text-red-600 hover:text-red-800 transition duration-300"
              >
                <FaTrash className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            onClick={() => addExercise(dateIndex)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
          >
            Add Exercise
          </button>
        </div>
      ))}
      <button
        onClick={addNewDate}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 w-full mt-6"
      >
        Add New Date
      </button>
    </div>
  );
};

export default HomeWorkout;
