<template>
  <div class="profile">
    <profileNavBar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <addRecipeModal />
          <p>Your Favorite Recipes</p>
          <button
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#add-recipe-modal"
          >Add Recipe</button>
          <favList />
        </div>
        <div class="col-4 offset-3">
          <p>Recipes to Try</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import profileNavBar from "../components/profileNavBar";
import addRecipeModal from "../components/addRecipeModal";
import favList from "../components/favList";

export default {
  name: "profile",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {},
  components: { profileNavBar, addRecipeModal, favList }
};
</script>


<style scoped>
</style>