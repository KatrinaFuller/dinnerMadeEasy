<template>
  <div id="add-recipe-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Recipe</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addRecipe()">
            <div class="form-group">
              <!-- <label for="label">Name</label> -->
              <input
                type="text"
                class="form-control"
                id="label"
                placeholder="Enter Recipe Name"
                v-model="newRecipe.label"
                required
              />
            </div>
            <div class="form-group">
              <!-- <label for="url">URL for recipe</label> -->
              <input
                type="text"
                class="form-control"
                id="url"
                placeholder="Recipe URL"
                v-model="newRecipe.url"
              />
            </div>
            <div class="form-group">
              <!-- <label for="ingredients">Ingredients</label> -->
              <input
                type="text"
                class="form-control"
                id="ingredientLines"
                placeholder="Enter Ingredients"
                v-model="newRecipe.ingredients"
              />
            </div>
            <div class="form-group">
              <!-- <label for="image">Image</label> -->
              <input
                type="text"
                class="form-control"
                id="image"
                placeholder="Enter Recipe Image"
                v-model="newRecipe.image"
              />
            </div>
            <h6>Tag Your Recipe</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Breakfast"
                id="breakfast"
                v-model="newRecipe.tags"
              />
              <label class="form-check-label" for="breakfast">Breakfast</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Lunch"
                id="lunch"
                v-model="newRecipe.tags"
              />
              <label class="form-check-label" for="lunch">Lunch</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Dinner"
                id="dinner"
                v-model="newRecipe.tags"
              />
              <label class="form-check-label" for="dinner">Dinner</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "add-recipe-modal",
  data() {
    return {
      newRecipe: {
        tags: []
      }
    };
  },
  computed: {},
  methods: {
    addRecipe() {
      this.newRecipe.ingredients = this.newRecipe.ingredients
        .split(",")
        .map(item => {
          return { text: item.trim() };
        });
      debugger;
      this.newRecipe.type = "favorites";
      this.$store.dispatch("addRecipe", this.newRecipe);
      $(".close").click();
    }
  },
  components: {}
};
</script>


<style scoped>
</style>