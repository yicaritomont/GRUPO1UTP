<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img id="carrousel_image_1" src="../../../../src/images/ParkingServicesBanner.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Reserva tu espacio</h5>
          <p>La forma más rápida, segura y sencilla de encontrar un espacio para tu vehículo.</p>      
        </div>
      </div>
      <div class="carousel-item">
        <img id="carrousel_image_2" src="../../../../src/images/banner_1.jpeg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Publica tu parking</h5>
          <p>Encuentra clientes rápidamente.</p>

        </div>
      </div>
      <div class="carousel-item">
        <img id="carrousel_image_3" src="../../../../src/images/ParkingServicesBanner.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">

          <h5>Lavado de vehículos</h5>
          <p>Tu carro limpio por dentro y por fuera.</p>

        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'HeaderSlide',
    props: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
