<template>
  <div class="pt-5">
    <div>
      <h6>Main Ingredient</h6>
      <select class="dropdown" v-model="mainIngredient">
        <option></option>
        <option>random</option>
        <option>chicken</option>
        <option>beef</option>
        <option>pork</option>
        <option>ham</option>
        <option>turkey</option>
        <option>fish</option>
      </select>
    </div>
    <div class="pt-4">
      <h6>Dietary Requirement</h6>
      <select class="dropdown" v-model="dietaryRequirement">
        <option></option>
        <option>low-carb</option>
        <option>low-fat</option>
        <option>low-sodium</option>
        <option>high-protein</option>
        <option>high-fiber</option>
        <option>balanced</option>
      </select>
    </div>
    <div class="randomRecipeButton pt-4">
      <button type="button" class="btn btn-lg" @click="generate">Generate Recipe</button>
      <div class="row justify-content-center pt-4">
        <div class="card shadow" style="width: 30rem;" v-if="recipe">
          <h1>{{recipe.label}}</h1>
          <img alt="Card image cap" v-bind:src="`${recipe.image}`" />
          <div class="card-body">
            <h4>
              <b>Ingredients:</b>
            </h4>
            <p
              class="card-text"
              v-for="ingredient in recipe.ingredients"
              :key="ingredient._id"
            >{{ingredient.text}}</p>
            <button class="btn mx-1" @click="addToFavorites()">Add to My Favorites</button>
            <button class="btn mx-1" @click="addToTry()">Recipe to try</button>
            <button class="btn mx-1">
              <a v-bind:href="`${recipe.url}`" target="_blank">Go To Recipe</a>
            </button>
          </div>
        </div>
        <div v-else class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "randomRecipeButton",
  data() {
    return {
      show: false,
      mainIngredient: "",
      dietaryRequirement: ""
    };
  },
  computed: {
    recipe() {
      return this.$store.state.recipes.recipe;
    },
    ingredient() {
      return this.$store.state.recipes.recipe.ingredients;
    }
  },
  mounted() {
    this.$store.dispatch("generate", {});
  },
  methods: {
    generate() {
      this.$store.commit("setRecipes", {});
      let data = { random: true };
      if (this.mainIngredient) {
        data.query = this.mainIngredient;
      }
      if (this.dietaryRequirement) {
        data.diet = this.dietaryRequirement;
      }
      this.$store.dispatch("generate", data);
    },
    addToFavorites() {
      this.recipe.type = "favorites";
      // this.$store.dispatch("addToFavorites", this.recipe);
      this.$store.dispatch("addRecipe", this.recipe);
    },
    addToTry() {
      this.recipe.type = "toTry";
      this.$store.dispatch("addToTry", this.recipe);
    }
  },
  components: {}
};
</script>


<style scoped>
.dropdown {
  width: 20vw;
}
.btn {
  background-color: #4bbcbc;
  color: black;
}
a {
  color: black;
  text-decoration: underline;
}
</style>