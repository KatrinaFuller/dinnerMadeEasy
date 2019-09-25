<template>
  <div class="navbar">
    <nav class="navbar navbar-light bg-light">
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
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>