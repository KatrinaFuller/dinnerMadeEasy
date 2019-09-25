<template>
  <div class="navbar1">
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <button
          class="btn btn-outline-primary"
          type="button"
          @click="logoutNav"
          v-if="user.email"
        >Logout</button>
        <button class="btn btn-outline-primary" type="button" @click="loginNav" v-else>Login</button>
        <button class="btn btn-outline-primary" type="button" @click="usernameButton" v-if="user.email">Hello, {{user.name}}</button>
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
      return this.$store.state.user;
    }
  },
  methods: {
    loginNav() {
      this.$store.dispatch("loginNav");
    },
    logoutNav() {
      this.$store.dispatch("logoutNav");
    },
    usernameButton(){
      this.$store.dispatch("usernameButton")
    }
  },
  components: {}
};
</script>


<style scoped>
.navbar1 {
  display: contents;
}
.form-inline {
  display: contents;
}
</style>