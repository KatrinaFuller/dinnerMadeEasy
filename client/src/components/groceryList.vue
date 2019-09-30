<template>
  <div class="groceryList border">
    Grocery List:
    <div class="groceryList">
      <ul>
        <li v-for="grocery in groceries" :key="grocery._id">
          <input type="checkbox" @click="toggleCompletedStatus(grocery)" />
          {{grocery.description}}
          <span class="text-red" @click="deleteGrocery(grocery)">X</span>
        </li>
      </ul>
    </div>
    <div class="input-group mb-3 col-4">
      <input
        type="text"
        class="form-control"
        placeholder="Add an item to grocery list"
        v-model="newItem.description"
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="addIngredient()">Add</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "groceryList",
  props: ["groceryProp"],
  data() {
    return {
      newItem: {}
    };
  },
  mounted() {
    this.$store.dispatch("getGroceries");
  },
  computed: {
    groceries() {
      return this.$store.state.groceries;
    }
  },
  methods: {
    addIngredient() {
      this.$store.dispatch("addIngredient", this.newItem);
    },
    deleteGrocery(grocery) {
      this.$store.dispatch("deleteGrocery", grocery);
    },
    toggleCompletedStatus(grocery) {
      this.$store.dispatch("toggleCompletedStatus", grocery);
    }
  },
  components: {}
};
</script>


<style scoped>
.text-red {
  color: red;
}
</style>