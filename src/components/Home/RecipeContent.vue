<template>
  <!-- start recipe structur -->
  <div class="card mb-4 mt-4">
    <RecipeContentHeader 
      :HeaderContent="RecipeContent"
    />
    
    <!-- start image of recipe -->
    <RecipeContentBody
      :BodyContent="RecipeContent"
    />
    <!-- end content of recipe -->

  </div>
  <!-- end recipe structur -->
</template>

<script>
  import RecipeContentHeader from "./RecipeContentHeader"
  import RecipeContentBody from "./RecipeContentBody"
  
  export default {
    props: ['RecipeContent'],
    components: {
      RecipeContentHeader,
      RecipeContentBody
    }
  }
</script>