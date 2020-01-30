<template>
  <div class="toTryList">
    <div class="list-group" dropzone="recipes" @dragover.prevent="()=>{}" @drop="onAdd">
      <div class="p-3 card" v-if="!recipes.length">Drag Recipe to Try</div>
      <div
        v-for="(recipe, i) in recipes"
        :key="recipe._id"
        @dragstart="setRecipe(recipe, i)"
        @dragend="removeRecipe(i)"
        draggable="true"
      >
        <recipe :recipe="recipe" />
      </div>
    </div>
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
    // recipesOLD() {
    //   return this.$store.state.toTryRecipes.slice(0, 5);
    // },

    recipes() {
      return this.$store.state.toTryRecipes.slice(0, 5);
    }
  },
  mounted() {
    this.$store.dispatch("addToTryList");
  },
  methods: {
    onAdd(evt) {
      if (!window.MOVING) {
        return;
      }
      let newtoTry = JSON.parse(JSON.stringify(window.MOVING));
      window.MOVING = undefined;
      newtoTry.type = "toTry";
      this.$store.dispatch("moveRecipe", newtoTry);
    },

    setRecipe(r, i) {
      window.MOVING = r;
      // this.$store.dispatch("moveRecipe", newFavorite);
      // window.localStorage.setItem("MOVING", json.stringify(r));
      // event.dataTransfer.setData("text/plain", JSON.stringify(r));
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