<template>
  <div class="toTryList">
    <toTryRecipe v-for="recipe in toTryRecipes" :toTryRecipe="recipe" :key="recipe._id" />
  </div>
</template>


<script>
import toTryRecipe from "../components/toTryRecipe";
export default {
  name: "toTryList",
  data() {
    return {};
  },
  computed: {
    recipes() {
      return this.$store.state.toTryRecipes;
    }
  },
  mounted() {
    this.$store.dispatch("addToTry");
  },
  methods: {},
  components: { toTryRecipe }
};
</script>


<style scoped>
</style>