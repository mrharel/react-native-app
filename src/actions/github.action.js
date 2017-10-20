export const GITHUB_LOAD_USER = {
  REQUEST: 'github-load-user-request',
  SUCCESS: 'github-load-user-success',
  ERROR: 'github-load-user-error',
};

export const githubLoadUserRequestAction = (userName) => ({
  type: GITHUB_LOAD_USER.REQUEST,
  userName,
});

export const githubLoadUserSuccessAction = (userName, userData) => ({
  type: GITHUB_LOAD_USER.SUCCESS,
  userName,
  userData,
});

export const githubLoadUserErrorAction = (userName, error) => ({
  type: GITHUB_LOAD_USER.ERROR,
  userName,
  error,
});
