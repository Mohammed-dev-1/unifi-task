export const recipes = {
  namespaced: true,
  state: {
    recipes: [
      {
        id: 1,
        recipe_image: require('../../assets/images/test.jpg'),
        title: 'test',
        body: 'test test2',
      }
    ],
    oldRecipe: {},
    newRecipe: {}
  },
  getters: {},
  mutations: {
    SET_NEW_RECIPE(state, data) {
      state.recipes.push(data);
    },
    DELETE_RECIPE(state, id) {
      for( var i = 0; i < state.recipes.length; i++){ 
        if ( state.recipes[i].id === id) { 
          state.recipes.splice(i, 1); 
        }
      }
    },
    UPDATE_RECIPE(state, data, id) {
      let index = state.recipes.findIndex(e => e.id == id);
      state.recipes[index] = data;
    },
    // GET_RECIPE(state, id) {
      
    // }
  },
  actions: {
    createRecipe({commit}, data, message) {
      commit('SET_NEW_RECIPE', data);
      commit('tools/SET_MESSAGE', message, {root:true})
    },
    deleteRecipe({commit}, id, message) {
      commit('DELETE_RECIPE', id);
      commit('tools/SET_MESSAGE', message, {root:true})
    },
    updateRecipe({commit}, data, id) {
      commit('UPDATE_RECIPE', data, id);
    },
    getRecipe({commit}, id) {
      commit('GET_RECIPE', id);
    }
  }
}