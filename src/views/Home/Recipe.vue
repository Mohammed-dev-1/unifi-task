<template>
<!-- main page  -->
  <div class="VectorGram">
    <BaseNav />

    <!-- start main page content -->
    <div class="container height-100">
      
      <!-- start main home page content -->
      <div class="container">
        <div class="row">
      
          <!-- start posts here -->      
          <div class="col-md-8">
            <RecipeForm />
          </div>
          <!-- end posts here -->      

          <BaseSideBar />
        </div>
      </div>

      <!-- end main home page content -->
    </div>
    <!-- end main page content -->

    <BaseFooter />
  </div>
  <!-- end main page -->
</template>

<script>
import RecipeForm from "../../components/Home/RecipeForm"
export default {
  components: {
    RecipeForm
  }
}
</script>