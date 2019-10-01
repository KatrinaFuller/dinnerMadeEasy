<template>
  <div class="favList">
    <recipe v-for="recipe in recipes" :recipe="recipe" :key="recipe._id" />
  </div>
</template>


<script>
import recipe from "../components/recipe";
export default {
  name: "favList",
  data() {
    return {};
  },
  computed: {
    recipes() {
      return this.$store.state.favoriteRecipes.slice(0,5);
    }
  },
  mounted() {
    this.$store.dispatch("addToFavorites");
  },
  methods: {},
  components: { recipe }
};
</script>


<style scoped>
</style>