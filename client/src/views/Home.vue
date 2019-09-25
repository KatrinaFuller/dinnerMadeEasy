<template>
  <div class="home">
    <!-- navbar -->
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <button class="btn btn-outline-primary" type="button" @click="loginNav">Login</button>
        <button class="btn btn-outline-primary" type="button" @click="logoutNav">Logout</button>
        <!-- <button class="btn btn-outline-primary" type="button">{{user.name}}</button> -->
      </form>
    </nav>
    <!-- header -->

    <!-- carousel -->

    <!-- 2 dropdowns -->

    <!-- random recipe button -->

    <!-- random recipe generated -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    loginNav() {
      this.$store.dispatch("loginNav");
    },
    logoutNav() {
      this.$store.dispatch("logoutNav");
    }
  }
};
</script>
