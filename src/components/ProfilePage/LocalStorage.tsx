import {ProfileProps} from './Common';
//import {userInfo} from './DatabaseStorage';

type State = Readonly<{userInfo:ProfileProps}>

export const loadState = ():State | {} => {
    try {
      const serializedState = sessionStorage.getItem('state');
  
      if (serializedState === null) {
        return {}//userInfo;  // TODO: get user info from db
      }
  
      return JSON.parse(serializedState).userInfo;
  
    } catch (err) {
      // die
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