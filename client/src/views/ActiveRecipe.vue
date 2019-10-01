<template>
  <div class="container-fluid">
    <div class="row">
      <div class="activeRecipe justify-content-start">
        <button class="btn btn-outline-primary" type="button" @click="backToProfile">Back to Profile</button>
      </div>
    </div>
  </div>
</template>


<script>
import router from "@/router.js";

export default {
  name: "activeRecipe",
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