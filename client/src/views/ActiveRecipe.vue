<template>
  <div class="container-fluid">
    <div class="row">
      <div class="activeRecipe justify-content-start">
        <button class="btn btn-outline-primary" type="button" @click="backToProfile">Back to Profile</button>
      </div>
    </div>
    <div class="row" v-if="recipe">
      <div class="col-12">
        <h1>{{recipe.label}}</h1>
      </div>
      <div class="col-12 text-center">
        <img v-bind:src="`${recipe.image}`" />
      </div>
      <div class="col-12">
        <star-rating
          :item-size="30"
          inactive-color="#000"
          active-color="#ffd055"
          :increment="0.5"
          v-model="rating"
        ></star-rating>
      </div>
      <div class="col-12">
        <button class="btn btn-outline-info mx-1 text-white">
          <a v-bind:href="`${recipe.url}`" target="_blank">Go To Recipe</a>
        </button>
      </div>
      <div class="col-12 text-left">
        <h4>
          <b>Ingredients:</b>
        </h4>
        <ul>
          <li v-for="ingredient in recipe.ingredients" :key="ingredient._id">
            <span class="red-text" @click="addIngredient(ingredient)">+</span>
            {{ingredient.text}}
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card w-100">
          <div class="card-body">
            <h5 class="card-title">Notes:</h5>
            <ul class="card-text">
              <li v-for="note in recipe.notes" :key="note._id">
                {{note.notes}}
                <span class="red-text" @click="deleteNote(note)">x</span>
              </li>
            </ul>
            <addNoteModal />
            <button
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#add-note-modal"
            >Add Notes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import router from "@/router.js";
import addNoteModal from "../components/addNoteModal";
import { StarRating } from "vue-rate-it";
import Swal from "sweetalert2";

export default {
  name: "activeRecipe",
  // props: ["recipe"],
  data() {
    return {
      rating: 0
    };
  },
  mounted() {
    let payload = {
      recipeId: this.$route.params.recipeId,
      recipeType: this.$route.params.recipeType
    };
    this.$store.dispatch("getRecipeById", payload);
  },
  computed: {
    recipe() {
      return this.$store.state.activeRecipe;
    },
    ingredient() {
      return this.$store.state.activeRecipe.recipe.ingredients;
    }
  },
  methods: {
    backToProfile() {
      this.$store.dispatch("backToProfile");
    },
    addIngredient(ingredient) {
      ingredient.description = ingredient.text;
      this.$store.dispatch("addIngredient", ingredient);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: "success",
        title: "added to grocery list"
      });
    },

    deleteNote(data) {
      debugger;
      data.recipeId = this.$route.params.recipeId;
      this.$store.dispatch("deleteNote", data);
    }
  },
  components: { addNoteModal, StarRating }
};
</script>


<style scoped>
ul {
  list-style-type: none;
}
.red-text {
  color: red;
  cursor: pointer;
}
</style>