<template>
  <div class="recipe">
    <div class="card mb-3 shadow" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img v-bind:src="`${recipe.image}`" class="card-img" alt="..." @click="viewRecipe()" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title inline" @click="viewRecipe()">{{recipe.label}}</h5>
            <span class="bg-light text-danger rounded px-1 ml-1 pb-1" @click="removeRecipe">x</span>
            <p class="card-text" v-if="recipe.type != 'toTry'">
              <star-rating
                :item-size="20"
                :item-small="true"
                inactive-color="#000"
                active-color="#ffd055"
                :increment="0.5"
                v-model="recipe.ratings"
                @rating-selected="setRating"
              ></star-rating>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { StarRating } from "vue-rate-it";

export default {
  name: "rec",
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
</style>