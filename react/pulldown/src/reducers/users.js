export const PULL_USER = 0;
export const ADD_USER = 1;

const users = (state = [], action) => {
  switch (action.type) {
    case PULL_USER:
      return state.filter( user => user.id !== action.id );

    case ADD_USER:
      const user = {
        icon: action.icon,
        name: action.name
      };

      return [...state, user];

    default:
      return state;

  }
};

export default users
