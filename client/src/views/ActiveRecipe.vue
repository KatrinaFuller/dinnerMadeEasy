<template>
  <div class="container-fluid">
    <div class="row">
      <div class="activeRecipe justify-content-start">
        <button class="btn btn-outline-primary" type="button" @click="backToProfile">Back to Profile</button>
      </div>
    </div>
    <div class="row" v-if="recipe">
      <h1>Title: {{recipe.label}}</h1>
      <img v-bind:src="`${recipe.image}`" />
      <h4>
        <b>Ingredients:</b>
      </h4>
      <p v-for="ingredient in recipe.ingredients" :key="ingredient._id">{{ingredient.text}}</p>
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
  computed: {
    recipe() {
      return this.$store.state.recipes.recipe;
    },
    ingredient() {
      return this.$store.state.recipes.recipe.ingredients;
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
</style>