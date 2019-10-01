<template>
  <div class="container-fluid">
    <div class="row">
      <div class="activeRecipe justify-content-start">
        <button class="btn btn-outline-primary" type="button" @click="backToProfile">Back to Profile</button>
      </div>
    </div>
    <div class="row" v-if="recipe">
      <div class="col-12">
        <h1>{{recipe.label}}</h1>
      </div>
      <div class="col-12 text-center">
        <img v-bind:src="`${recipe.image}`" />
      </div>
      <div class="col-12 text-center">
        <h4>
          <b>Ingredients:</b>
        </h4>
        <ul>
          <li v-for="ingredient in recipe.ingredients" :key="ingredient._id">{{ingredient.text}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
// import router from "@/router.js";

export default {
  name: "activeRecipe",
  // props: ["recipe"],
  data() {
    return {};
  },
  mounted() {
    let payload = {
      recipeId: this.$route.params.recipeId,
      recipeType: this.$route.params.recipeType
    };
    this.$store.dispatch("getRecipeById", payload);
  },
  computed: {
    recipe() {
      return this.$store.state.activeRecipe;
    },
    ingredient() {
      return this.$store.state.activeRecipe.recipe.ingredients;
    }
  },
  methods: {
    backToProfile() {
      this.$store.dispatch("backToProfile");
    }
  },
  components: {}
};
</script>


<style scoped>
ul {
  list-style-type: none;
}
</style>