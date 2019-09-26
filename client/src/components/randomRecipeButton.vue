<template>
  <div class="randomRecipeButton pt-4">
    <button type="button" class="btn btn-primary btn-lg" @click="generate(_id)">Generate Recipe</button>
  </div>
</template>


<script>
export default {
  name: "randomRecipeButton",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("");
  },
  computed: {},
  methods: {
    generate(_id) {
      debugger;
      return this.$store.state.recipes;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>