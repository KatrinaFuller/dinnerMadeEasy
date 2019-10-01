<template>
  <div class="toTryList">
    <recipe v-for="recipe in recipes" :recipe="recipe" :key="recipe._id" />
  </div>
</template>


<script>
import recipe from "../components/recipe";
export default {
  name: "toTryList",
  data() {
    return {};
  },
  computed: {
    recipes() {
      return this.$store.state.toTryRecipes.slice(0,5);
    }
  },
  mounted() {
    this.$store.dispatch("addToTryList");
  },
  methods: {},
  components: { recipe }
};
</script>


<style scoped>
</style>