<template>
  <div class="container-fluid bg">
    <div class="row">
      <div class="activeRecipe justify-content-start">
        <button class="btn" type="button" @click="backToProfile">Back to Profile</button>
      </div>
    </div>
    <div class="row" v-if="recipe">
      <div class="col-12">
        <h1 class="mt-3 mb-4">{{recipe.label}}</h1>
      </div>
      <div class="col-12 text-center">
        <img v-bind:src="`${recipe.image}`" />
      </div>
      <div class="col-12 d-flex justify-content-center mt-4">
        <star-rating
          :item-size="30"
          inactive-color="#000"
          active-color="#ffd055"
          :increment="0.5"
          v-model="recipe.ratings"
          @rating-selected="setRating"
        ></star-rating>
      </div>
      <div class="col-12">
        <button class="btn mx-1 my-4">
          <a v-bind:href="`${recipe.url}`" target="_blank">Go To Recipe</a>
        </button>
        <!-- <button class="btn btn-outline-info" @click="moveToFavorites">Move to Favorite's list</button> -->
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
        <div class="card w-100 shadow mt-3">
          <div class="card-body">
            <h5 class="card-title">Directions:</h5>
            <div class="card-text">
              <p v-for="direction in recipe.directions" :key="direction._id">
                {{direction}}
                <span class="red-text" @click="deleteDirection(direction)">x</span>
              </p>
            </div>
            <addDirectionsModal />
            <button class="btn" data-toggle="modal" data-target="#add-directions-modal">Add</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card w-100 shadow mb-5 mt-4">
          <div class="card-body">
            <h5 class="card-title">Notes:</h5>
            <div class="card-text">
              <p v-for="note in recipe.notes" :key="note._id">
                {{note.notes}}
                <span class="red-text" @click="deleteNote(note)">x</span>
              </p>
            </div>
            <addNoteModal />
            <button class="btn" data-toggle="modal" data-target="#add-note-modal">Add Notes</button>
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
import addDirectionsModal from "../components/addDirectionsModal";

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
      _id: this.$route.params.recipeId,
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
    // moveToFavorites() {
    //   debugger;

    //   // this.$store.dispatch("addToFavorites", this.recipe);
    //   this.$store.dispatch("moveToFavorites", this.recipe);
    // },

    deleteNote(data) {
      // data._id = this.$route.params.recipeId;
      data.recipeId = this.$route.params.recipeId;
      // debugger;
      this.$store.dispatch("deleteNote", data);
    },
    deleteDirection(direction) {
      let payload = {
        recipeId: this.$route.params.recipeId,
        direction
      };
      this.$store.dispatch("deleteDirection", payload);
    },

    setRating(rating) {
      let payload = {
        _id: this.$route.params.recipeId,
        ratings: rating
      };
      // debugger;
      this.$store.dispatch("setRating", payload);
    }
  },

  components: { addNoteModal, StarRating, addDirectionsModal }
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
img {
  min-height: 50vh;
}
h1 {
  font-family: "Asap", sans-serif;
}
.bg {
  background-color: #eeeae5;
}
.btn {
  background-color: #4bbcbc;
}
a {
  color: black;
  text-decoration: underline;
}
</style>