<template>
  <!-- <div>
    Home
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
      data-wrap="true"
    >
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
            class="d-block w-100 vh-33"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img src="https://place-hold.it/100x100" class="d-block w-100 vh-33" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://place-hold.it/100x100" class="d-block w-100 vh-33" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>-->
  <div>
    <div class="container text-center my-3">
      <h2>Bootstrap 4 Multiple Item Carousel</h2>
      <div class="row mx-auto my-auto">
        <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img class="d-block col-4 img-fluid" src="http://placehold.it/350x180?text=1" />
            </div>
            <div class="carousel-item">
              <img class="d-block col-4 img-fluid" src="http://placehold.it/350x180?text=2" />
            </div>
            <div class="carousel-item">
              <img class="d-block col-4 img-fluid" src="http://placehold.it/350x180?text=3" />
            </div>
            <div class="carousel-item">
              <img class="d-block col-4 img-fluid" src="http://placehold.it/350x180?text=4" />
            </div>
            <div class="carousel-item">
              <img class="d-block col-4 img-fluid" src="http://placehold.it/350x180?text=5" />
            </div>
            <div class="carousel-item">
              <img class="d-block col-4 img-fluid" src="http://placehold.it/350x180?text=6" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <h4>Advances one slide at a time</h4>
    <div class="home">
      <!-- navbar -->
      <navbar />
      <!-- header -->

      <!-- carousel -->

      <!-- 2 dropdowns -->

      <!-- random recipe button -->

      <!-- random recipe generated -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    loginNav() {
      this.$store.dispatch("loginNav");
    },
    logoutNav() {
      this.$store.dispatch("logoutNav");
    }
  }
};
</script>
<style scoped>
/* .carousel {
  height: 33vh;
}
.carousel-inner img {
  height: 33vh;
  object-fit: contain;
} */
</style>
