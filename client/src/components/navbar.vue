<template>
  <div class="navbar1">
    <nav class="navbar navbar-light bg-dark">
      <form class="form-inline">
        <button class="btn btn-outline-primary" type="button" @click="loginNav">Login</button>
        <button class="btn btn-outline-primary" type="button" @click="logoutNav">Logout</button>
        <!-- <button class="btn btn-outline-primary" type="button">{{user.name}}</button> -->
      </form>
    </nav>
  </div>
</template>


<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
    user() {
      debugger;
      return this.$store.user;
    }
  },
  methods: {
    loginNav() {
      this.$store.dispatch("loginNav");
    },
    logoutNav() {
      this.$store.dispatch("logoutNav");
    }
  },
  components: {}
};
</script>


<style scoped>
.navbar1 {
  display: contents;
}
</style>