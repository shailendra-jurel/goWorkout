import React, { useState, useEffect } from 'react';

const MorningRoutine = () => {
  const routines = ['Wake Up Time', 'Running Distance', 'Study Hour'];
  const dates = ['2024-10-01', '2024-10-02', '2024-10-03'];

  const [routineData, setRoutineData] = useState(() => {
    const savedData = localStorage.getItem('routineData');
    return savedData ? JSON.parse(savedData) : initializeData();
  });

  function initializeData() {
    return dates.reduce((acc, date) => {
      acc[date] = routines.reduce((routineAcc, routine) => {
        routineAcc[routine] = '';
        return routineAcc;
      }, {});
      return acc;
    }, {});
  }

  useEffect(() => {
    localStorage.setItem('routineData', JSON.stringify(routineData));
  }, [routineData]);

  const handleChange = (date, routine, value) => {
    setRoutineData(prevData => ({
      ...prevData,
      [date]: {
        ...prevData[date],
        [routine]: value
      }
    }));
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Morning Routine</h2>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Date</th>
            {routines.map(routine => (
              <th key={routine} className="px-4 py-2 border">{routine}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dates.map(date => (
            <tr key={date}>
              <td className="px-4 py-2 border">{date}</td>
              {routines.map(routine => (
                <td key={routine} className="px-4 py-2 border">
                  <input
                    type="text"
                    value={routineData[date][routine]}
                    onChange={e => handleChange(date, routine, e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Input"
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

export default MorningRoutine;
