<template>
  <div>
    <div v-if="recipes[0]">
      <RecipeContent 
        v-for="recipe in recipes"
        :key="recipe.id"
        :RecipeContent="recipe"
      />
    </div>
    
    <!-- If don't have any recipe you will show this message below -->
    <div v-else class="card rounded mb-4 mt-4">
      <div class="card-body">
        <h1 class="text text-danger">There is no recipe here.</h1>
        <p class="text text-danger">Let's create a new one !</p>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeContent from "./RecipeContent"
import { mapState } from 'vuex'
export default {
  components: {
    RecipeContent
  },
  computed: {
    ...mapState('recipes', [
      'recipes'
    ])
  }
}
</script>