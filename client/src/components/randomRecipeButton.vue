<template>
  <div class="randomRecipeButton pt-4">
    <button type="button" class="btn btn-primary btn-lg" @click="generate()">Generate Recipe</button>
  </div>
</template>


<script>
export default {
  name: "randomRecipeButton",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("generate", {});
  },
  computed: {},
  methods: {
    generate() {
      return this.$store.state.recipes;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>