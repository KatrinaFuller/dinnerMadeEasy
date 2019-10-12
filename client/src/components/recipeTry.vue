<template>
  <div class="recipeTry">
    <div class="card mb-3 shadow" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img v-bind:src="`${recipe.image}`" class="card-img" alt="..." @click="viewRecipe()" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title inline" @click="viewRecipe()">{{recipe.label}}</h5>
            <span class="bg-light text-danger rounded px-1 ml-1 pb-1" @click="removeRecipe">x</span>
            <button
              class="btn btn-outline-primary btn-sm"
              type="button"
              @click="moveToFav()"
            >Move to Favorites</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { StarRating } from "vue-rate-it";

export default {
  name: "recTry",
  props: ["recipe"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    removeRecipe() {
      this.$store.dispatch("removeRecipe", this.recipe);
    },
    viewRecipe() {
      this.$router.push({
        name: "activeRecipe",
        params: { recipeId: this.recipe._id, recipeType: this.recipe.type }
      });
    },
    setRating(rating) {
      let payload = {
        _id: this.recipe._id,
        ratings: rating
      };
      this.$store.dispatch("setRating", payload);
    },
    moveToFav() {
      this.recipe.type = "favorites";
      this.$store.dispatch("moveRecipe", this.recipe);
    }
  },
  components: { StarRating }
};
</script>


<style scoped>
.inline {
  display: inline;
}

.x {
  color: #cb3232;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  cursor: pointer;
}
</style>