<template>
  <b-modal v-model="status" title="Are you sure ?" hide-footer>
    <form @submit.prevent="updateRecipe(recipeData.id)">
      <div class="form-group">
        <b-input-group size="1.5" class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="person-fill"></b-icon>
          </b-input-group-prepend>
          <input type="text" class="form-control" v-model="recipeData.title" placeholder="Change recipe title">
        </b-input-group>
      </div>

      <div class="form-group">
        <b-input-group size="1.5" class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="globe"></b-icon>
          </b-input-group-prepend>
          <b-form-input type="file" v-model="recipeData.recipe_image"></b-form-input>
        </b-input-group>
      </div>

      <div class="form-group">
        <textarea
          class="form-control"
          placeholder="Change your description"
          v-model="recipeData.body"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      
      <button type="submit" class="btn btn-success mr-2">Update</button>
      <div @click="status=false" class="btn btn-danger">Cancel</div>
    </form>
  </b-modal>  
</template>

<script>
  export default {
    props: ['status', 'recipe'],
    data() {
      return {
        recipeData: this.recipe,
      }
    },
    methods: {
      updateRecipe(RecipeId) {
        this.$store.dispatch('recipes/updateRecipe', this.recipeData, RecipeId);
        this.status = false;
      }
    } 
  }
</script>