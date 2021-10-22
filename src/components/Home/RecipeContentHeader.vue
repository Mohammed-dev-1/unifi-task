<template>
  <div class="card-header d-flex">
    <div class="pt-1">
      <img class="rounded-circle" src="../../assets/avatar3.png" height="40" width="40">
    </div>
    <div class="col">
      <div class="text text-dark font-weight-bold">
        Owner
      </div>
      <span class="text text-dark">
        <small>1 hours ago</small>
      </span>
    </div>
    
    <!-- if the recipe has same user id  -->
    <div v-if="true">
      <div class="d-flex">
        <!-- Delete recipe -->
        <div @click="deleteRecipe" class="mt-2 mr-1 h5 text text-danger cursor">
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
        </div>

        <!-- update recipe -->
        <div @click="toggle" class="mt-2 mr-1 h5 text text-success cursor">
          <b-icon icon="info" aria-hidden="true"></b-icon>
        </div>
      </div>
            
      <RecipeUpdateModal 
        :status="status"
        :recipe="HeaderContent"
      />
    </div>    
  </div>
</template>

<script>
  import RecipeUpdateModal from "./RecipeUpdateModal"
  
  export default {
    data() {
      return {
        status: false
      }
    },
    props: ['HeaderContent'],
    components: {
      RecipeUpdateModal
    },
    methods: {
      toggle() {
        this.status = !this.status;
      },
      deleteRecipe() {
        const message = {
          type: 'SUCCESS', 
          message: 'Recipe was deleted successfuly'
        }
        this.$store.dispatch('recipes/deleteRecipe', this.HeaderContent.id, message)
      }
    }
  }
</script>