<template>
  <div>
    <img 
      class="card-img-top" 
      height="300" 
      width="900" 
      alt="Recipe Image"
      :src="BodyContent.recipe_image" 
    >
    <!-- end image of Recipe -->

    <!-- start conetnt of Recipe -->
    <div class="card-body">
      <h2 class="card-title">{{BodyContent.title}}</h2>
      <p class="card-text">{{BodyContent.body}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['BodyContent']    
  }
</script>