<template>
  <div class="container-fluid">
    <div class="row">
    <h1>More of your recipes to try</h1>
      <div class="MoreToTry justify-content-start">
        <button class="btn btn-outline-primary" type="button" @click="backToProfile">Back to Profile</button>
      </div>
    </div>
    <recipe v-for="recipe in recipes" :recipe="recipe" :key="recipe._id" />
  </div>
</template>


<script>
import router from "@/router.js";
import recipe from "../components/recipe"
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
  mounted(){
    this.$store.dispatch("addToTryList");
  },
  methods: {
    backToProfile() {
      this.$store.dispatch("backToProfile");
    }
  },
  components: {recipe}
};
</script>


<style scoped>
</style>