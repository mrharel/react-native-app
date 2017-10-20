class API {
  store = null;

  setStore(store) {
    this.store = store;
  }

  dispatch(action, value) {
    if (action && this.store) {
      this.store.dispatch(action(value));
    }
  }

  apiCall({
    url,
    body,
    method = 'GET',
    actions,
    contentType = 'application/json',
  }) {
    return new Promise((res, rej) => {
      const headers = new Headers();
      headers.append('content-type', contentType);
      let reqBody = null;
      if (body) {
        reqBody = JSON.stringify(body);
      }

      const fetchOptions = {
        method,
        headers,
        mode: 'cors',
        credentials: 'include',
        body: reqBody,
      };

      if (actions) {
        this.dispatch(actions.request);
      }
      fetch(url, fetchOptions)
      .then((response) => {
        const isSuccess = response.status === 200;
        return response.json().then((result) => {
          if (isSuccess) {
            if (actions) {
              this.dispatch(actions.success, result);
            }
            res(result);
          } else {
            if (actions) {
              this.dispatch(actions.error, result);
            }
            rej(result);
          }
        });
      })
      .catch((err) => {
        if (actions) {
          this.dispatch(actions.error, err);
        }
        rej(err);
      });
    });
  }
}

const api = new API();

export default api;