<template>
  <div class="favList">
    <!-- <draggable v-model="recipes" class="list-group" group="recipes" @add="onAdd"> -->
    <div dropzone="recipes" @dragover.prevent="()=>{}" @drop="onAdd">
      <div
        draggable="true"
        @dragstart="setRecipe(recipe, i)"
        @dragend="removeRecipe(i)"
        class="list-group-recipe recipe"
        v-for="(recipe,i) in recipes"
        :key="recipe._id"
      >
        <recipe :recipe="recipe" />
      </div>
    </div>
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
    recipes() {
      return this.$store.state.favoriteRecipes.slice(0, 5);
      // get() {
      //   return this.$store.state.favoriteRecipes.slice(0, 5);
      // },
      // set(value) {
      //   let data = { recipeId: this.recipe._id, tasks: value };
      //   this.$store.commit("setToTry");
      // }
    }
  },
  mounted() {
    this.$store.dispatch("addToFavorites");
  },
  methods: {
    onAdd(evt) {
      if (!window.MOVING) {
        return;
      }
      let newFavorite = JSON.parse(JSON.stringify(window.MOVING));
      window.MOVING = undefined;
      newFavorite.type = "favorites";
      this.$store.dispatch("moveRecipe", newFavorite);
    },
    setRecipe(r, i) {
      window.MOVING = r;
    },
    removeRecipe(i) {
      this.recipes.splice(i, 1);
    }
  },
  components: { recipe, draggable }
};
</script>


<style scoped>
</style>