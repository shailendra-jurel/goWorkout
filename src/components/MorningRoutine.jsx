import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const MorningRoutine = () => {
  const [data, setData] = useState([
    { date: '2024-10-01', tasks: [{ name: 'Yoga', duration: 30 }, { name: 'Healthy Breakfast', duration: 15 }] },
  ]);

  const addNewDate = () => {
    setData([...data, { date: new Date().toISOString().substring(0, 10), tasks: [] }]);
  };

  const addTask = (index) => {
    const updatedData = [...data];
    updatedData[index].tasks.push({ name: '', duration: 0 });
    setData(updatedData);
  };

  const handleDateChange = (index, value) => {
    const updatedData = [...data];
    updatedData[index].date = value;
    setData(updatedData);
  };

  const handleTaskChange = (dateIndex, taskIndex, field, value) => {
    const updatedData = [...data];
    updatedData[dateIndex].tasks[taskIndex][field] = value;
    setData(updatedData);
  };

  const removeTask = (dateIndex, taskIndex) => {
    const updatedData = [...data];
    updatedData[dateIndex].tasks.splice(taskIndex, 1);
    setData(updatedData);
  };

  const removeDate = (dateIndex) => {
    const updatedData = [...data];
    updatedData.splice(dateIndex, 1);
    setData(updatedData);
  };

  return (
    <div className="morning-routine-section max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-800 text-center">Morning Routine Tracker</h2>
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

          <h3 className="text-lg font-semibold text-gray-600 mb-4">Tasks:</h3>
          {row.tasks.map((task, taskIndex) => (
            <div key={taskIndex} className="flex mb-4 items-center">
              <input
                type="text"
                value={task.name}
                onChange={(e) => handleTaskChange(dateIndex, taskIndex, 'name', e.target.value)}
                placeholder="Task Name"
                className="flex-1 p-3 mr-2 rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <input
                type="number"
                value={task.duration}
                onChange={(e) => handleTaskChange(dateIndex, taskIndex, 'duration', e.target.value)}
                placeholder="Duration (minutes)"
                className="flex-1 p-3 rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <button
                onClick={() => removeTask(dateIndex, taskIndex)}
                className="ml-4 text-red-600 hover:text-red-800 transition duration-300"
              >
                <FaTrash className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            onClick={() => addTask(dateIndex)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
          >
            Add Task
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

export default MorningRoutine;
