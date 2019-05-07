import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    registerEmail: 'mredwinchenv1@gmail.com',
    registerPassword: '1234567890',
  },
  actions: {
    register({ state }) {
      return HTTP().post('/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      });
    },
  },
  mutations: {
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
  },
};
