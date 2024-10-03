import React, { useState } from 'react';

const GymSection = () => {
  const [data, setData] = useState([
    { date: '2024-10-01', exercises: [{ name: 'Cycling', value: 10 }, { name: 'Bench Press', value: 8 }, { name: 'Deadlift', value: 5 }] },
  ]);

  const addNewDate = () => {
    setData([...data, { date: '', exercises: [] }]);
  };

  const addExercise = (index) => {
    const updatedData = [...data];
    updatedData[index].exercises.push({ name: '', value: 0 });
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

  return (
    <div className="gym-section">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Gym Workout</h2>
      {data.map((row, dateIndex) => (
        <div key={dateIndex} className="mb-10 bg-gray-100 p-6 rounded-lg shadow-md">
          <label className="block text-gray-700 font-semibold mb-2">Date:</label>
          <input
            type="date"
            value={row.date}
            onChange={(e) => handleDateChange(dateIndex, e.target.value)}
            className="w-full mb-4 p-3 rounded border-gray-300"
          />
          <h3 className="text-lg font-semibold text-gray-600">Exercises:</h3>
          {row.exercises.map((exercise, exerciseIndex) => (
            <div key={exerciseIndex} className="flex mb-4">
              <input
                type="text"
                value={exercise.name}
                onChange={(e) => handleExerciseChange(dateIndex, exerciseIndex, 'name', e.target.value)}
                placeholder="Exercise Name"
                className="w-full mr-2 p-3 rounded border-gray-300"
              />
              <input
                type="number"
                value={exercise.value}
                onChange={(e) => handleExerciseChange(dateIndex, exerciseIndex, 'value', e.target.value)}
                placeholder="Reps/Duration"
                className="w-full p-3 rounded border-gray-300"
              />
            </div>
          ))}
          <button
            onClick={() => addExercise(dateIndex)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add Exercise
          </button>
        </div>
      ))}
      <button
        onClick={addNewDate}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 mt-4"
      >
        Add New Date
      </button>
    </div>
  );
};

export default GymSection;
