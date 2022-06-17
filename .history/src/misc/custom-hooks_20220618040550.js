import { useReducer } from 'react';
import { initialize } from 'workbox-google-analytics';

function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialize, inital => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : initialState;
  });
}
