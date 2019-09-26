<template>
  <div class="profileNavBar">
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <button class="btn btn-outline-primary" type="button" @click="backButton">Back</button>
        <h3>{{user.name}}-Dashboard</h3>
        <button class="btn btn-outline-primary" type="button" @click="logout">Logout</button>
      </form>
    </nav>
  </div>
</template>


<script>
import router from "@/router.js";
export default {
  name: "profileNavBar",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logoutNav");
    },

    backButton() {
      this.$store.dispatch("backButton");
    }
  },
  components: {}
};
</script>


<style scoped>
.profileNavBar {
  display: contents;
}
.form-inline {
  display: contents;
}
</style>