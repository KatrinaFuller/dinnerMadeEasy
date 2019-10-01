<template>
  <div class="containter-fluid">
    <!-- navbar -->
    <navbar />
    <!-- header -->
    <homeHeader />
    <!-- carousel -->
    <carousel />
    <!-- 2 dropdowns -->
    <!-- random recipe button -->
    <randomRecipeButton />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar";
import carousel from "../components/carousel";
import homeHeader from "../components/homeHeader";
import randomRecipeButton from "../components/randomRecipeButton";

export default {
  name: "home",
  components: {
    carousel,
    navbar,
    homeHeader,
    randomRecipeButton
  }
};
</script>
<style scoped>
</style>
