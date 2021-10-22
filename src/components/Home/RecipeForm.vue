<template>
  <div class="row shadow-sm p-4 mt-4 mb-4">
    <form class="col" @submit.prevent="createRecipe" >
      <div class="h3 text text-primary font-weight-bold mb-3">
        Add new recipe
      </div>
      <div class="form-group">
        <b-input-group size="1.5" class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="person-fill"></b-icon>
          </b-input-group-prepend>
          <input type="text" class="form-control" v-model="title" placeholder="Recipe title">
        </b-input-group>
        <span class="text text-danger" v-if="false">Title is required</span>
      </div>

      <div class="form-group">
        <b-input-group size="1.5" class="mb-2">
          <input type="file" @change="reviewImage" placeholder="Choose image" />
        </b-input-group>
        <span class="text text-danger" v-if="false">Image is required</span>
      </div>

      <div class="form-group">
        <textarea
          class="form-control"
          placeholder="Recipe description"
          v-model="description"
          cols="30"
          rows="10"
        ></textarea>
        <span class="text text-danger" v-if="false">Description is required</span>
      </div>
      <button :disabled="showButton" type="submit" class="btn btn-success">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    showButton() {
      return (this.description&&this.title&&this.recipeImage)?false:true;
    }
  },
  data() {
    return {
      description: '',
      title: '',
      recipeImage: ''
    }
  },
  methods: {
    reviewImage(e) {
      this.recipeImage = require(`../../assets/images/${e.target.files[0].name}`);
    },
    createRecipe() {
      const form = {
        id: Math.random(),
        title: this.title,
        body: this.description,
        recipe_image: this.recipeImage
      }
      // const message = {
      //   type: 'SUCCESS',
      //   message: 'Recipe was created successfuly'
      // }
      console.log(form)
      this.$store.dispatch('recipes/createRecipe', form)
        .then(()=> {
          this.$router.push({
            name: 'Home',
          })
        })
    }
  }
}
</script>