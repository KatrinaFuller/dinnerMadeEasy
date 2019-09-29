<template>
  <div class="groceryList border">
    Grocery List:
    <div class="input-group mb-3 col-4">
      <input type="text" class="form-control" placeholder="Add an item to grocery list" />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="addIngredient()">Add</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "groceryList",
  data() {
    return {
      newItem: {
        description: ""
      }
    };
  },
  computed: {},
  methods: {
    addIngredient() {
      this.$store.dispatch("addIngredient", this.newItem);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>