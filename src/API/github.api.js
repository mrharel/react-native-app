import API from './index';
import { githubLoadUserRequestAction, githubLoadUserSuccessAction, githubLoadUserErrorAction } from '../actions/github.action';

const loadUser = (userName) => {
  return API.apiCall({
    url: `https://api.github.com/users/${userName}`,
    actions: {
      request: () => githubLoadUserRequestAction(userName),
      success: (result) => githubLoadUserSuccessAction(userName, result),
      error: (err) => githubLoadUserErrorAction(userName, err),
    }
  });
};

export default loadUser;