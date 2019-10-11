<template>
  <div class="toTryList">
    <draggable v-model="recipes" class="list-group" group="recipes" @add="onAdd">
      <recipe
        class="list-group-recipe recipe"
        v-for="recipe in recipes"
        :recipe="recipe"
        :key="recipe._id"
      />
    </draggable>
  </div>
</template>


<script>
import recipe from "../components/recipe";
import draggable from "vuedraggable";
export default {
  name: "toTryList",
  data() {
    return {};
  },
  computed: {
    recipesOLD() {
      return this.$store.state.toTryRecipes.slice(0, 5);
    },

    recipes: {
      get() {
        return this.$store.state.toTryRecipes.slice(0, 5);
      },
      set(value) {
        let data = { recipeId: this.recipe._id, tasks: value };
        this.$store.commit("setFavRecipes");
      }
    }
  },
  mounted() {
    this.$store.dispatch("addToTryList");
  },
  methods: {
    onAdd(evt) {
      debugger;
      // let currentListId = this.listProp._id; //targetlist
      let newIndex = evt.newDraggableIndex;
      let recipe = this.$store.state.recipe[RecipeId][newIndex];
      recipe.type = "favorite";
      debugger;
      this.$store.dispatch("moveRecipe", recipe);
    }
  },
  components: { recipe, draggable }
};
</script>


<style scoped>
</style>