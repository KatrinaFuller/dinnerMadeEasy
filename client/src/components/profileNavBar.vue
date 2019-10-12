<template>
  <div class="row sticky-top">
    <div class="col-12">
      <nav class="navbar">
        <form class="form-inline">
          <button class="btn" type="button" @click="backButton">Back</button>
          <h3>{{user.name}}'s Dashboard</h3>
          <button class="btn" type="button" @click="logout">Logout</button>
        </form>
      </nav>
    </div>
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
/* .profileNavBar {
  display: contents;
} */
.form-inline {
  display: contents;
}
.sticky-top {
  position: sticky;
  background-color: #dad6d2;
}
h3 {
  font-family: "Amaranth", sans-serif;
  font-size: 4vh;
}
.btn {
  background-color: #4bbcbc;
  color: black;
}
</style>