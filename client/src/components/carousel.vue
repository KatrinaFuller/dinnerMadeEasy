<template>
  <!-- <div class="carousel">
    <div class="container text-center my-3">
      <div class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col">
                <img
                  src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
                  alt="1 slide"
                />
              </div>
              <div class="col">
                <img
                  src="https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg"
                  alt="2 slide"
                />
              </div>
              <div class="col">
                <img
                  src="https://www.edamam.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg"
                  alt="3 slide"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <img
                  src="https://www.edamam.com/web-img/2ca/2ca946a40338e9b93c1d14dec518e1b8.jpg"
                  alt="4 slide"
                />
              </div>
              <div class="col">
                <img
                  src="https://www.edamam.com/web-img/fd1/fd1afed1849c44f5185720394e363b4e.jpg"
                  alt="5 slide"
                />
              </div>
              <div class="col">
                <img
                  src="https://www.edamam.com/web-img/8f8/8f810dfe198fa3e520d291f3fcf62bbf.jpg"
                  alt="6 slide"
                />
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href=".main-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href=".main-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>-->
  <div class="carousel main-carousel slide w-100" data-ride="carousel">
    <div row class="carousel-inner">
      <div class="carousel-item h100 caro-item-1 active">
        <!-- <div class="col-4"> -->
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/8f8/8f810dfe198fa3e520d291f3fcf62bbf.jpg"
          alt="6 slide"
        />
        <!-- </div>

        <div class="carousel-item h100 caro-item-2">-->
        <!-- <div class="col-4"> -->
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
          alt="1 slide"
        />
        <!-- </div>

        <div class="carousel-item h100 caro-item-3">-->
        <!-- <div class="col-4"> -->
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg"
          alt="2 slide"
        />
      </div>
      <div class="carousel-item h100 caro-item-1">
        <!-- <div class="col-4"> -->
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/8f8/8f810dfe198fa3e520d291f3fcf62bbf.jpg"
          alt="6 slide"
        />
        <!-- </div>

        <div class="carousel-item h100 caro-item-2">-->
        <!-- <div class="col-4"> -->
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg"
          alt="1 slide"
        />
        <!-- </div>

        <div class="carousel-item h100 caro-item-3">-->
        <!-- <div class="col-4"> -->
        <img
          class="mx-2"
          src="https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg"
          alt="2 slide"
        />
      </div>
    </div>
    <!-- </div>
    </div>-->
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