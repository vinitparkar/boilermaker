import axios from 'axios';

/* -----------------    ACTION TYPES    ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

/* ------------    ACTION CREATORS      ------------------ */

const setCurrentUser = user => ({ type: SET_CURRENT_USER, user });
const removeCurrentUser = () => ({ type: REMOVE_CURRENT_USER });

/* ------------          REDUCER         ------------------ */

export default function reducer (currentUser = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user;
    case REMOVE_CURRENT_USER:
      return {};
    default:
      return currentUser;
  }
}

/* ------------       THUNK CREATORS     ------------------ */

export const login = (credentials) => dispatch => {
  axios.put('/api/me', credentials)
       .then(res => dispatch(setCurrentUser(res.data)));
};

export const signup = (credentials) => dispatch => {
  axios.post('/api/me', credentials)
       .then(res => dispatch(setCurrentUser(res.data)));
};

export const fetchCurrentUser = () => dispatch => {
  axios.get('/api/me')
       .then(res => dispatch(setCurrentUser(res.data)));
};

export const logout = () => dispatch => {
  axios.delete('/api/me')
       .then(() => dispatch(removeCurrentUser()));
};
