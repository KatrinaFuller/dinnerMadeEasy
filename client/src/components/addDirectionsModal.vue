<template>
  <div id="add-directions-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Directions</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addDirections()">
            <div class="form-group">
              <textarea
                type="text"
                class="form-control"
                rows="3"
                id="note"
                placeholder="Directions Here"
                v-model="newDirections.directions"
                required
              /></textarea>
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
  name: "add-directions-modal",
  data() {
    return {
      newDirections: {}
    };
  },
  computed: {},
  methods: {
    addDirections() {
      let payload = {
        recipeId: this.$route.params.recipeId,
        directions: this.newDirections.directions
      };
      this.$store.dispatch("addDirections", payload);
      $(".close").click();
      // this.newNote = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>