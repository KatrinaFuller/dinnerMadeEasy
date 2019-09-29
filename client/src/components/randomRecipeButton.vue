<template>
  <div class="randomRecipeButton pt-4">
    <button type="button" class="btn btn-primary btn-lg" @click="generate">Generate Recipe</button>

    <div class="card" style="width: 30rem;" v-if="recipe">
      <h1>{{recipe.label}}</h1>
      <img alt="Card image cap" v-bind:src="`${recipe.image}`" />
      <div class="card-body">
        <h4>
          <b>Ingredients:</b>
        </h4>
        <p class="card-text" v-for="ingredient in recipe.ingredients" :key="ingredient._id">
          <button class="btn btn-primary">+</button>
          {{ingredient.text}}
        </p>
        <button class="btn btn-primary" @click="addToFavorites()">Add to My Favorites</button>
        <!-- <button class="btn btn-primary" @click="addToTry">Recipe to try</button> -->
      </div>
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
    },
    addToFavorites() {
      this.recipe.type = "favorites";
      // this.$store.dispatch("addToFavorites", this.recipe);
      this.$store.dispatch("addRecipe", this.recipe);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>