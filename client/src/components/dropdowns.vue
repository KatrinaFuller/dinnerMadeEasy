<template>
  <div class="pt-5">
    <div>
      <h6>Main Ingredient</h6>
      <select class="dropdown" v-model="mainIngredient">
        <option disabled value></option>
        <option>random</option>
        <option>chicken</option>
        <option>beef</option>
        <option>pork</option>
        <option>ham</option>
        <option>turkey</option>
        <option>fish</option>
      </select>
    </div>
    <div class="pt-4">
      <h6>Dietary Requirement</h6>
      <select class="dropdown" v-model="dietaryRequirement">
        <option disabled value></option>
        <option>random</option>
        <option>low-carb</option>
        <option>low-fat</option>
        <option>high-protein</option>
        <option>vegan</option>
        <option>vegetarian</option>
        <option>peanut-free</option>
      </select>
    </div>
  </div>
</template>


<script>
export default {
  name: "dropdowns",
  data() {
    return {
      mainIngredient: "",
      dietaryRequirement: ""
    };
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.dropdown {
  width: 20vw;
}
</style>