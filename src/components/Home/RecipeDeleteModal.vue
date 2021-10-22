<template>
  <b-modal v-model="statusDelete" title="Are you sure ?" hide-footer>
    <form @submit.prevent="deleteRecipe(RecipeId)">
      <button type="submit" class="btn btn-danger mr-2">Delete</button>
      <div @click="statusDelete=false" class="btn btn-light">Cancel</div>
    </form>
  </b-modal>  
</template>

<script>
  export default {
    props: ['statusDelete', 'RecipeId'],
    methods: {
      deleteRecipe(RecipeId) {
        this.$store.dispatch('recipes/deleteRecipe', RecipeId);
        this.statusDelete = false;
      }
    } 
  }
</script>