<template>
  <div class="container-fluid MoreFavorites">
    <div class="row justify-content-start">
      <button class="btn btn-outline-primary" type="button" @click="backToProfile">Back to Profile</button>
    </div>
    <div class="row justify-content-center">
      <h1>More of your favorite recipes</h1>
    </div>
    <recipe v-for="recipe in recipes" :recipe="recipe" :key="recipe._id" />
  </div>
</template>


<script>
import router from "@/router.js";
import recipe from "../components/recipe";
export default {
  name: "MoreFavorites",
  data() {
    return {};
  },
  computed: {
    recipes() {
      return this.$store.state.favoriteRecipes;
    }
  },
  mounted() {
    this.$store.dispatch("addToFavorites");
  },
  methods: {
    backToProfile() {
      this.$store.dispatch("backToProfile");
    }
  },
  components: { recipe }
};
</script>


<style scoped>
</style>