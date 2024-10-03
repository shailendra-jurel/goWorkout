import React, { useState, useEffect } from 'react';

const HomeExercises = () => {
  const exercises = ['Push Ups', 'Crunches', 'Squats'];
  const dates = ['2024-10-01', '2024-10-02', '2024-10-03'];

  const [homeData, setHomeData] = useState(() => {
    const savedData = localStorage.getItem('homeData');
    return savedData ? JSON.parse(savedData) : initializeData();
  });

  function initializeData() {
    return dates.reduce((acc, date) => {
      acc[date] = exercises.reduce((exAcc, exercise) => {
        exAcc[exercise] = '';
        return exAcc;
      }, {});
      return acc;
    }, {});
  }

  useEffect(() => {
    localStorage.setItem('homeData', JSON.stringify(homeData));
  }, [homeData]);

  const handleChange = (date, exercise, value) => {
    setHomeData(prevData => ({
      ...prevData,
      [date]: {
        ...prevData[date],
        [exercise]: value
      }
    }));
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Home Exercises</h2>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Date</th>
            {exercises.map(exercise => (
              <th key={exercise} className="px-4 py-2 border">{exercise}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dates.map(date => (
            <tr key={date}>
              <td className="px-4 py-2 border">{date}</td>
              {exercises.map(exercise => (
                <td key={exercise} className="px-4 py-2 border">
                  <input
                    type="text"
                    value={homeData[date][exercise]}
                    onChange={e => handleChange(date, exercise, e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Reps/Sets"
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

export default HomeExercises;
