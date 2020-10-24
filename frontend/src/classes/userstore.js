import { extendObservable } from 'mobx';

class UserStore {
  constructor() {
    extendObservable(this, {
      isLoggedIn: '',
      username: ''
    })
  }
}

export default new UserStore();
