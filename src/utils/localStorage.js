export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      // Ignore write errors
    }
  };
  