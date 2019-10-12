<template>
  <div class="container-fluid MoreFavorites bg">
    <div class="row justify-content-start">
      <button class="btn" type="button" @click="backToProfile">Back to Profile</button>
    </div>
    <div class="row justify-content-center">
      <h1 class="mb-5 mt-3">More of your favorite recipes</h1>
    </div>
    <div class="row">
      <recipe class="offset-1 offset-md-0 col-10 col-md-3" v-for="recipe in recipes" :recipe="recipe" :key="recipe._id" />
    </div>
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
.bg {
  background-color: #eeeae5;
  min-height: 100vh;
}
.btn {
  background-color: #4bbcbc;
}
h1 {
  font-family: "Asap", sans-serif;
}
</style>