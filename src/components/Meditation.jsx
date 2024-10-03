import React, { useState, useEffect } from 'react';

const Meditation = () => {
  const asanas = ['Surya Namaskar', 'Shavasana', 'Padmasana', 'Bhujangasana'];
  const dates = ['2024-10-01', '2024-10-02', '2024-10-03'];

  const [meditationData, setMeditationData] = useState(() => {
    const savedData = localStorage.getItem('meditationData');
    return savedData ? JSON.parse(savedData) : initializeData();
  });

  function initializeData() {
    return dates.reduce((acc, date) => {
      acc[date] = asanas.reduce((asanaAcc, asana) => {
        asanaAcc[asana] = '';
        return asanaAcc;
      }, {});
      return acc;
    }, {});
  }

  useEffect(() => {
    localStorage.setItem('meditationData', JSON.stringify(meditationData));
  }, [meditationData]);

  const handleChange = (date, asana, value) => {
    setMeditationData(prevData => ({
      ...prevData,
      [date]: {
        ...prevData[date],
        [asana]: value
      }
    }));
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Meditation & Yoga</h2>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Date</th>
            {asanas.map(asana => (
              <th key={asana} className="px-4 py-2 border">{asana}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dates.map(date => (
            <tr key={date}>
              <td className="px-4 py-2 border">{date}</td>
              {asanas.map(asana => (
                <td key={asana} className="px-4 py-2 border">
                  <input
                    type="text"
                    value={meditationData[date][asana]}
                    onChange={e => handleChange(date, asana, e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Duration"
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

export default Meditation;
