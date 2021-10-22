export const users = {
  namespaced: true,
  state: {
    users: [
      {
        username: 'mohammed',
        email: 'mohammed@gmail.com',
        password: '12345678'
      }
    ]
  },
  getters: {},
  mutations: {
    SET_USER(state, data) {
      let user;
      for( var i = 0; i < state.users.length; i++){ 
        if ( state.users[i].email === data.email) { 
          user = state.users[i];
        }
      }
      localStorage.setItem('user', JSON.stringify(user));
    }
  },
  actions: {
    login({commit}, data, message) {
      commit('SET_USER', data);
      commit('tools/SET_MESSAGE', message, {root:true});
    }
  }
}