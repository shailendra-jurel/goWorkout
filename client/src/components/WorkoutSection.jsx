// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateWorkout } from '../store/actions';

// const WorkoutSection = ({ title, sectionType, exercises }) => {
//   // Sample dates (you can change this or generate dynamically)
//   const dates = ['2024-10-01', '2024-10-02', '2024-10-03', '2024-10-04'];

//   // Initialize the state for each exercise on each date
//   const [workoutData, setWorkoutData] = useState(
//     JSON.parse(localStorage.getItem(sectionType)) ||
//     dates.map(date => ({
//       date,
//       targets: exercises.reduce((acc, exercise) => {
//         acc[exercise] = ''; // Initialize empty targets
//         return acc;
//       }, {})
//     }))
//   );

//   const dispatch = useDispatch();

//   // Save to localStorage and update Redux store when workout data changes
//   useEffect(() => {
//     localStorage.setItem(sectionType, JSON.stringify(workoutData));
//     dispatch(updateWorkout(sectionType, workoutData));
//   }, [workoutData, dispatch, sectionType]);

//   // Handle input changes for each target
//   const handleInputChange = (dateIndex, exercise, value) => {
//     const updatedData = workoutData.map((item, idx) => {
//       if (idx === dateIndex) {
//         return {
//           ...item,
//           targets: { ...item.targets, [exercise]: value }
//         };
//       }
//       return item;
//     });
//     setWorkoutData(updatedData);
//   };

//   return (
//     <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//       <h2 className="text-xl font-semibold mb-4">{title}</h2>
//       <table className="min-w-full table-auto border-collapse text-left">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 border">Date</th>
//             {exercises.map(exercise => (
//               <th key={exercise} className="px-4 py-2 border">{exercise}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {workoutData.map((item, dateIndex) => (
//             <tr key={item.date}>
//               <td className="px-4 py-2 border">{item.date}</td>
//               {exercises.map(exercise => (
//                 <td key={exercise} className="px-4 py-2 border">
//                   <input
//                     type="text"
//                     value={item.targets[exercise]}
//                     onChange={e => handleInputChange(dateIndex, exercise, e.target.value)}
//                     className="w-full p-2 border rounded"
//                     placeholder="Reps/Sets/Duration"
//                   />
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default WorkoutSection;
