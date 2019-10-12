<template>
  <div class="container-fluid MoreToTry bg">
    <div class="row justify-content-start">
      <button class="btn" type="button" @click="backToProfile">Back to Profile</button>
    </div>
    <div class="row justify-content-center">
      <h1 class="mb-5 mt-3">More of your recipes to try</h1>
    </div>
    <div class="row">
      <recipe class="col-3" v-for="recipe in recipes" :recipe="recipe" :key="recipe._id" />
      button class="btn btn-outline-primary" type="button" @click="backToProfile">Back to Profile</button>

    </div>
  </div>
</template>


<script>
import router from "@/router.js";
import recipe from "../components/recipe";
export default {
  name: "MoreToTry",
  data() {
    return {};
  },
  computed: {
    recipes() {
      return this.$store.state.toTryRecipes;
    }
  },
  mounted() {
    this.$store.dispatch("addToTryList");
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
.MoreToTry {
  flex-direction: row;
}
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