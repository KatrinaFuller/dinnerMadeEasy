<template>
<div>
<select v-model="selected">
  <option disabled value="">Main Ingredient</option>
  <option>chicken</option>
  <option>beef</option>
  <option>pork</option>
  <option>ham</option>
  <option>turkey</option>
  <option>fish</option>
</select>
<br>
<select v-model="selected">
  <option disabled value="">Dietary Requirement</option>
  <option>low-carb</option>
  <option>low-fat</option>
  <option>high-protein</option>
  <option>vegan</option>
  <option>vegetarian</option>
  <option>peanut-free</option>
</select>
</div>

</template>


<script>
export default {
  name: "dropdowns",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>