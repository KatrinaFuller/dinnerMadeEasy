<template>
  <div class="profile">
    <profileNavBar />
    <addRecipeModal />
    <button class="btn btn-primary" data-toggle="modal" data-target="#add-recipe-modal">Add Recipe</button>
  </div>
</template>


<script>
import profileNavBar from "../components/profileNavBar";
import addRecipeModal from "../components/addRecipeModal";

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
  components: { profileNavBar, addRecipeModal }
};
</script>


<style scoped>
</style>