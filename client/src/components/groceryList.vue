<template>
  <div class="groceryList">
    <h3 class="mt-2">Grocery List:</h3>
    <div class="groceryList row justify-content-center">
      <div class="col-10 col-md-3 border white shadow mt-2 text-left">
        <ul class="mt-3">
          <li v-for="grocery in groceries" :key="grocery._id">
            <input
              type="checkbox"
              v-model="grocery.completed"
              @click="toggleCompletedStatus(grocery)"
            />
            {{grocery.description}}
            <span
              class="text-red"
              @click="deleteGrocery(grocery)"
            >X</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="input-group mb-3 col-10 col-md-4 mt-3">
        <input
          type="text"
          class="form-control shadow"
          placeholder="Add an item to grocery list"
          v-model="newItem.description"
        />
        <div class="input-group-append shadow">
          <button class="btn" type="button" @click="addIngredient()">Add</button>
        </div>
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
      this.newItem = {};
      // event.target.reset();
    },
    deleteGrocery(grocery) {
      this.$store.dispatch("deleteGrocery", grocery);
    },
    toggleCompletedStatus(grocery) {
      grocery.completed = !grocery.completed;
      this.$store.dispatch("toggleCompletedStatus", grocery);
    }
  },
  components: {}
};
</script>


<style scoped>
.text-red {
  color: red;
  cursor: pointer;
}
ul {
  list-style-type: none;
}
h3 {
  font-family: "Asap", sans-serif;
}
.btn {
  background-color: #4bbcbc;
  color: black;
}
.white {
  background-color: white;
}
</style>