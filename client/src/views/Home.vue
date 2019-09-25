<template>
  <div>
    <!-- navbar -->
    <navbar />
    <!-- header -->

    <!-- carousel -->
    <carousel />
    <!-- 2 dropdowns -->

    <!-- random recipe button -->

    <!-- random recipe generated -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: { carousel, navbar },

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
<style scoped>
</style>
