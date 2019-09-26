<template>
  <div class="favList">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{recipe.label}}</h5>
            <p class="card-text">Rating: {{recipe.rating}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "favList",
  data() {
    return {};
  },
  computed: {
    recipe() {
      return this.$store.state.recipes[(this.recipe.type = "favorites")];
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>