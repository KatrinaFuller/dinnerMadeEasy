<template>
  <div class="sticky-top row">
    <div class="col-12">
      <nav class="navbar">
        <form class="form-inline">
          <button class="btn" type="button" @click="logoutNav" v-if="user.email">Logout</button>
          <!-- <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Sign-in</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
          </div>-->

          <button class="btn" type="button" @click="loginNav" v-else>Login</button>
          <button
            class="btn"
            type="button"
            @click="usernameButton"
            v-if="user.email"
          >Hello, {{user.name}}</button>
        </form>
      </nav>
    </div>
  </div>
</template>


<script>
import AuthModule from "../modules/AuthModule";
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
    usernameButton() {
      this.$store.dispatch("usernameButton");
    }
  },
  components: {}
};
</script>


<style scoped>
/* .navbar1 {
  display: contents;
  padding: 0.9rem 1rem;
} */
.form-inline {
  display: contents;
}
.sticky-top {
  position: sticky;
  background-color: #dad6d2;
}
.btn {
  background-color: #4bbcbc;
  color: black;
}
</style>