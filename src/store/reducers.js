// reducer.js

const initialState = {
    workouts: JSON.parse(localStorage.getItem('workouts')) || {}
  };
  
  const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_WORKOUT':
        const updatedWorkouts = {
          ...state.workouts,
          [action.payload.section]: action.payload.data
        };
        localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
        return { ...state, workouts: updatedWorkouts };
      default:
        return state;
    }
  };
  
  export default workoutReducer;
  

  // action.js

export const updateWorkout = (section, data) => ({
  type: 'UPDATE_WORKOUT',
  payload: { section, data }
});
