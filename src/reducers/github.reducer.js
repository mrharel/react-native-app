import { GITHUB_LOAD_USER } from '../actions/github.action';

const initialState = {
  fetching: false,
  userName: null,
  userData: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GITHUB_LOAD_USER.REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
        userName: action.userName,
      };

    case GITHUB_LOAD_USER.SUCCESS:
      return {
        ...state,
        userName: action.userName,
        userData: action.userData,
        fetching: false,
      };

    case GITHUB_LOAD_USER.ERROR:
      return {
        ...state,
        error: action.error,
        fetching: false,
      };
    default:
      return state;
  }
};