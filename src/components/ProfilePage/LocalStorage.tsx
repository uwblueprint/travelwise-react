import {ProfileProps} from './Common';
<<<<<<< HEAD
<<<<<<< HEAD
//import {userInfo} from './DatabaseStorage';
=======
>>>>>>> 4ba5f01... adding profile page
=======
>>>>>>> ba34135... user info session storage

type State = Readonly<{userInfo:ProfileProps}>

export const loadState = ():State | {} => {
    try {
      const serializedState = sessionStorage.getItem('state');
  
      if (serializedState === null) {
<<<<<<< HEAD
<<<<<<< HEAD
        return {}//userInfo;  // TODO: get user info from db
=======
        return {};
>>>>>>> 4ba5f01... adding profile page
=======
        return {};
>>>>>>> ba34135... user info session storage
      }
  
      return JSON.parse(serializedState).userInfo;
  
    } catch (err) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      // die
=======
>>>>>>> 4ba5f01... adding profile page
=======
>>>>>>> ba34135... user info session storage
=======
      // die
>>>>>>> def3a8c... front end and db stuff
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