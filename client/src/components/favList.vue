<template>
  <div class="favList">
    <!-- <draggable v-model="recipes" class="list-group" group="recipes" @add="onAdd"> -->
    <recipe
      class="list-group-recipe recipe"
      v-for="recipe in recipes"
      :recipe="recipe"
      :key="recipe._id"
    />
    <!-- </draggable> -->
  </div>
</template>


<script>
import recipe from "../components/recipe";
import draggable from "vuedraggable";
export default {
  name: "favList",
  data() {
    return {};
  },
  computed: {
    recipesOLD() {
      return this.$store.state.favoriteRecipes.slice(0, 5);
    },

    recipes: {
      get() {
        return this.$store.state.favoriteRecipes.slice(0, 5);
      },
      set(value) {
        let data = { recipeId: this.recipe._id, tasks: value };
        this.$store.commit("setToTry");
      }
    }
  },
  mounted() {
    this.$store.dispatch("addToFavorites");
  },
  methods: {
    onAdd(evt) {
      debugger;
      // let currentListId = this.listProp._id; //targetlist
      let newIndex = evt.newDraggableIndex;
      let recipe = this.$store.state.recipe[RecipeId][newIndex];
      recipe.type = "toTry";
      debugger;
      this.$store.dispatch("moveRecipe", recipe);
    }
  },
  components: { recipe, draggable }
};
</script>


<style scoped>
</style>