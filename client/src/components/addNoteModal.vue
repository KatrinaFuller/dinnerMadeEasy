<template>
  <div id="add-note-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Note</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addNote()">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="note"
                placeholder="Enter Note"
                v-model="newNote.notes"
                required
              />
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
  name: "add-note-modal",
  data() {
    return {
      newNote: {}
    };
  },
  computed: {},
  methods: {
    addNote() {
      let payload = {
        recipeId: this.$route.params.recipeId,
        notes: this.newNote.notes
      };
      debugger;
      this.$store.dispatch("addNote", payload);
      $(".close").click();
    }
  },
  components: {}
};
</script>


<style scoped>
</style>