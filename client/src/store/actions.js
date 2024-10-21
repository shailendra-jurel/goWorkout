// src/store/action.js

export const updateWorkout = (section, data) => ({
    type: 'UPDATE_WORKOUT',
    payload: { section, data }
  });
  