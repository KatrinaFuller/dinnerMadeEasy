<template>
  <div>
    <!-- navbar -->
    <navbar />
    <!-- header -->
    <header />
    <!-- carousel -->
    <carousel />
    <!-- 2 dropdowns -->
    <dropdowns />
    <!-- random recipe button -->
    <randomRecipeButton />
    <!-- random recipe generated -->
    <randomRecipe />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar";
import carousel from "../components/carousel";
import header from "../components/header";
import dropdowns from "../components/dropdowns";
import randomRecipeButton from "../components/randomRecipeButton";
import randomRecipe from "../components/randomRecipe";

export default {
  name: "home",
  components: {
    carousel,
    navbar,
    header,
    dropdowns,
    randomRecipeButton,
    randomRecipe
  }
};
</script>
<style scoped>
</style>
