import Vue from 'vue'
import Vuex from 'vuex'
import {tools} from "./Modules/tools.module";
import {recipes} from "./Modules/recipe.module";
import {users} from "./Modules/users.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tools,
    recipes,
    users
  }
})
