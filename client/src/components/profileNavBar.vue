<template>
  <div class="profileNavBar">
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <button class="btn btn-outline-success" type="button" @click="backButton">Back</button>
        <button class="btn btn-sm btn-outline-secondary" type="button" @click="logout">Logout</button>
      </form>
    </nav>
  </div>
</template>


<script>
export default {
  name: "profileNavBar",
  data() {
    return {};
  },
  computed: {},
  methods: {
    backButton() {},
    logout() {
      this.$store.dispatch("logout");
    }
  },
  components: {}
};
</script>


<style scoped>
</style>