import {ProfileProps} from './Common';

type State = Readonly<{userInfo:ProfileProps}>

export const loadState = ():State | {} => {
    try {
      const serializedState = sessionStorage.getItem('state');
  
      if (serializedState === null) {
        return {};
      }
  
      return JSON.parse(serializedState).userInfo;
  
    } catch (err) {
      return {};
    }
};
  
export const saveState = (state:State) => {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem('state', serializedState);
    } catch (err) {
      // die
    }
};