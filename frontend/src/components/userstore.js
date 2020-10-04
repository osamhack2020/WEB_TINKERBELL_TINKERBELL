import { extendObservable } from 'mobx';

class UserStore {
  constructor() {
    extendObservable(this, {
      loading: '',
      isLoggedIn: '',
      username: ''
    })
  }
}

export default new UserStore();
