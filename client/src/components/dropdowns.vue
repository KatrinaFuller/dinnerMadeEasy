<template>
<div class="pt-5">
<div>
<select v-model="mainIngredient">
  <option disabled value="">Main Ingredient</option>
  <option>chicken</option>
  <option>beef</option>
  <option>pork</option>
  <option>ham</option>
  <option>turkey</option>
  <option>fish</option>
</select>
</div>
<div class="pt-2">
<select v-model="dietaryRequirement" @change="onChange(index)">
  <option disabled value="">Dietary Requirement</option>
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
</style>