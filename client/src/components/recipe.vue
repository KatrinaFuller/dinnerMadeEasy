<template>
  <div class="recipe">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img v-bind:src="`${recipe.image}`" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title inline">{{recipe.type}}-{{recipe.label}}</h5>
            <span class="bg-light text-danger rounded px-1 ml-1 pb-1" @click="removeRecipe">x</span>
            <p class="card-text">Rating: {{recipe.rating}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "recipe",
  props: ["recipe"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    removeRecipe() {
      this.$store.dispatch("removeRecipe", this.recipe);
    }
  },
  components: {}
};
</script>


<style scoped>
.inline {
  display: inline;
}

.x {
  color: #cb3232;
}
</style>