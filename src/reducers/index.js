import { ADD_USER, USER_LOGIN } from '../actions/actionType';
import { history } from '../helpers';

const initstate = {
  users: []
};
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case ADD_USER:
      const stateObj = Object.assign({}, state, {
        users: [
          ...state.users,
          {
            username: action.username,
            password: action.password
          }
        ]
      });

      history.push('/login');
      return stateObj;

    case USER_LOGIN:
      return state.users.map(user => {
        if (
          user.username === action.username &&
          user.password === action.password
        ) {
          history.push('/dashboard');
        }
      });

    default:
      return state;
  }
};
export default reducer;
