<template>
  <div class="carousel main-carousel slide w-100" data-ride="carousel">
    <div row class="carousel-inner">
      <div class="carousel-item h100 caro-item-1 active">
        <a href="http://www.bbcgoodfood.com/recipes/2558/" target="_blank">
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/d37/d376c145f2a59befa7738a2c35caab31.jpg"
          alt="6 slide"
          />
        </a>
        <a href="http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html" target="_blank">
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
          alt="1 slide"
        />
        </a>
        <a href="http://nymag.com/restaurants/articles/recipes/fishsteak.htm" target="_blank">
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/9be/9be37985e53b2158a974437a959a9e2d.jpg"
          alt="2 slide"
        />
        </a>
      </div>
      <div class="carousel-item h100 caro-item-1 active">
        <a href="https://www.epicurious.com/recipes/food/views/baked-gefilte-fish-51154400" target="_blank">
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/30b/30bc8ba581e8df430cff2a22c5e32abf.jpg"
          alt="6 slide"
        />
        </a>
        <a href="http://www.bbc.co.uk/food/recipes/roastleglessturkey_13963" target="_blank">
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/a92/a92d1edb41681ffd984ed2ca7eeb97ec.jpg"
          alt="1 slide"
        />
        </a>
        <a href="http://honestcooking.com/pig-of-the-week-rillette-recipe/" target="_blank">
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/d23/d23884c327c2bb711065ece7be236612.jpg"
          alt="2 slide"
        />
        </a>
      </div>
    </div>
    <a class="carousel-control-prev" href=".main-carousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href=".main-carousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>


<script>
export default {
  name: "carousel",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.carousel-control-prev {
  color: black;
}
</style>