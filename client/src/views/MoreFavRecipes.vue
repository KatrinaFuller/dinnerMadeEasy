<template>
  <div class="container-fluid">
    <div class="row">
      <div class="MoreFavorites justify-content-start">
        <button class="btn btn-outline-primary" type="button" @click="backToProfile">Back to Profile</button>
      </div>
    </div>
    <h1>More of your favorite recipes</h1>
  </div>
</template>


<script>
import router from "@/router.js";
export default {
  name: "MoreFavorites",
  data() {
    return {};
  },
  computed: {},
  methods: {
    backToProfile() {
      this.$store.dispatch("backToProfile");
    }
  },
  components: {}
};
</script>


<style scoped>
</style>