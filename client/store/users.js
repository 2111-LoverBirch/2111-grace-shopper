import axios from "axios";

// Action Type
const GOT_USERS = "GOT_USERS";
const TOKEN = "token";

// Action Creator
const _gotUsers = users => ({
  type: GOT_USERS,
  users,
});

// Thunk
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data: users } = await axios.get("api/users", {
          headers: {
            authorization: token,
          },
        });
        dispatch(_gotUsers(users));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_USERS:
      return action.users;
    default:
      return state;
  }
};
