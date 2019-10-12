<template>
  <div class="container-fluid MoreToTry bg">
    <div class="row justify-content-start">
      <button class="btn" type="button" @click="backToProfile">Back to Profile</button>
    </div>
    <div class="row justify-content-center">
      <h1 class="mb-5 mt-3">More of your recipes to try</h1>
    </div>
    <div class="row">
      <recipeTry
        class="offset-1 offset-md-0 col-10 col-md-3"
        v-for="recipe in recipes"
        :recipe="recipe"
        :key="recipe._id"
      />
    </div>
  </div>
</template>


<script>
import router from "@/router.js";
import recipeTry from "../components/recipeTry";
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
  components: { recipeTry }
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