import { ADD_USER, USER_LOGIN } from '../actions/actionType';
import { history } from '../helpers';

const initstate = {
  users: []
};
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case ADD_USER:
      const stateObj = Object.assign({}, state, {
        users: [...state.users, action.payload]
      });

      history.push('/login');

      return stateObj;

    case USER_LOGIN:
      return state.users.map(user => {
        if (
          user.username === action.payload.username &&
          user.password === action.payload.password
        ) {
          history.push('/dashboard');
        }
      });

    default:
      return state;
  }
};
export default reducer;
