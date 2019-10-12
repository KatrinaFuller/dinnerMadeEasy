<template>
  <div class="login pt-4 bg">
    <h1 class="title mb-4">Dinner Made Easy</h1>
    <form v-if="loginForm" @submit.prevent="loginUser">
      <input class="shadow" type="email" v-model="creds.email" placeholder="email" />
      <input class="shadow" type="password" v-model="creds.password" placeholder="password" />
      <button class="btn m-2" type="submit">Login</button>
    </form>
    <form v-else @submit.prevent="register">
      <input class="shadow" type="text" v-model="newUser.name" placeholder="name" />
      <input class="shadow" type="email" v-model="newUser.email" placeholder="email" />
      <input class="shadow" type="password" v-model="newUser.password" placeholder="password" />
      <button class="btn m-2 shadow" type="submit">Create Account</button>
    </form>
    <div class="action text" @click="loginForm = !loginForm">
      <p v-if="loginForm">No account? Click here to Register</p>
      <p v-else>Already have an account? Click here to Login</p>
    </div>
    <div class="col-sm-12">
      <img src="../assets/dmelogo.png" alt />
    </div>
  </div>
</template>

<script>
import router from "@/router.js";
export default {
  name: "login",
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  beforeCreate() {
    if (this.$store.state.user._id) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>

<style scoped>
.bg {
  background-color: #eeeae5;
  min-height: 100vh;
  min-width: 100vw;
}
.btn {
  background-color: #4bbcbc;
}
h1 {
  font-family: "Amaranth", sans-serif;
  font-size: 7vh;
}
img {
  height: 300px;
  width: 300px;
}
</style>