import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const DateTaskTracker = ({ title, initialData }) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('taskData');
    return savedData ? JSON.parse(savedData) : initialData || [];
  });

  const saveDataToLocalStorage = (dataToSave) => {
    localStorage.setItem('taskData', JSON.stringify(dataToSave));
  };

  useEffect(() => {
    saveDataToLocalStorage(data);
  }, [data]);

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
    <div className="section max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-800 text-center">{title}</h2>
      {data.map((row, dateIndex) => (
        <div key={dateIndex} className="date-row mb-6">
          <input
            type="date"
            value={row.date}
            onChange={(e) => handleDateChange(dateIndex, e.target.value)}
            className="border rounded p-2"
          />
          <button onClick={() => addTask(dateIndex)} className="bg-blue-500 text-white p-2 rounded ml-4">
            Add Task
          </button>
          <button onClick={() => removeDate(dateIndex)} className="bg-red-500 text-white p-2 rounded ml-4">
            Remove Date
          </button>
          <div className="tasks mt-4">
            {row.tasks.map((task, taskIndex) => (
              <div key={taskIndex} className="task mb-2 flex">
                <input
                  type="text"
                  placeholder="Task Name"
                  value={task.name}
                  onChange={(e) => handleTaskChange(dateIndex, taskIndex, 'name', e.target.value)}
                  className="border rounded p-2 flex-1"
                />
                <input
                  type="number"
                  placeholder="Duration (in hours)"
                  value={task.duration}
                  onChange={(e) => handleTaskChange(dateIndex, taskIndex, 'duration', e.target.value)}
                  className="border rounded p-2 w-24 ml-2"
                />
                <button onClick={() => removeTask(dateIndex, taskIndex)} className="ml-2 text-red-500">
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={addNewDate} className="bg-green-500 text-white p-2 rounded">
        Add New Date
      </button>
    </div>
  );
};

export default DateTaskTracker;
