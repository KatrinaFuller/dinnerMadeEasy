<template>
  <div class="profile">
    <profileNavBar />
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <groceryList />
        </div>
      </div>
      <div class="row">
        <div class="offset-1 col-4">
          <addRecipeModal />
          <h3>
            Your Favorite Recipes
            <!-- <span
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#add-recipe-modal"
            >-->
            <i class="far fa-plus-square" data-toggle="modal" data-target="#add-recipe-modal"></i>
            <!-- </span> -->
          </h3>

          <favList />
          <button
            class="btn btn-outline-primary"
            type="button"
            @click="MoreFavRecipes"
          >More Favorite Recipes</button>
        </div>
        <div class="col-4 offset-2">
          <h3>More Recipes to Try</h3>
          <toTryList />
          <button
            class="btn btn-outline-primary"
            type="button"
            @click="MoreToTry"
          >More Recipes To Try</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import profileNavBar from "../components/profileNavBar";
import addRecipeModal from "../components/addRecipeModal";
import favList from "../components/favList";
import groceryList from "../components/groceryList";
import router from "@/router.js";
import toTryList from "../components/toTryList";

export default {
  name: "profile",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    groceries() {
      return this.$store.state.groceries;
    }
  },
  methods: {
    MoreFavRecipes() {
      this.$store.dispatch("MoreFavRecipes");
    },
    MoreToTry() {
      this.$store.dispatch("MoreToTry");
    }
  },
  components: { profileNavBar, addRecipeModal, favList, groceryList, toTryList }
};
</script>


<style scoped>
</style>