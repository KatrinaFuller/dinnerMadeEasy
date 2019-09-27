<template>
  <div class="randomRecipeButton pt-4">
    <button type="button" class="btn btn-primary btn-lg" @click="generate">Generate Recipe</button>
    <div v-if="recipe">
      <h1>{{recipe.label}}</h1>
      <img v-bind:src="`${recipe.image}`" />
      <p>{{recipe.ingredientLines}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "randomRecipeButton",
  data() {
    return {
      show: false
    };
  },
  computed: {
    recipe() {
      return this.$store.state.recipes.recipe;
    }
  },
  methods: {
    generate() {
      this.$store.dispatch("generate", {});
    }
  },
  components: {}
};
</script>


<style scoped>
</style>