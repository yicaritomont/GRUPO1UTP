<template>
<div class="home">
  <carousel>
    <slide>
      <img :src="imagen1" alt="Fácil y seguro Mr. Parking" />
    </slide>
    <slide>
      <img :src="imagen2" alt="Fácil y seguro Mr. Parking" />
    </slide>
    <slide>
      <img :src="imagen3" alt="Fácil y seguro Mr. Parking" />
    </slide>
  </carousel>

  <div id="Servicios">
    <ServiceList />
  </div>
  <div id="Noticias">
    <EventsList />
  </div>
  <div id="Equipo">
    <TeamList />
  </div>
  <Footer/>
</div>
</template>
<script>
import EventsList from '../components/EventsList';
import ServiceList from '../components/ServiceList';
import TeamList from '../components/TeamList';
import Footer from '../components/Footer.vue';
import {Carousel, Slide} from 'vue-carousel';
import imagen1 from '../assets/banner1.jpg'
import imagen2 from '../assets/BANNER2.png'
import imagen3 from '../assets/BANNER-3.png'
export default {
  name: 'home',
  components: {
    EventsList,
    ServiceList,
    TeamList,
    Footer,
    Carousel,
    Slide,
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    }
  },
  data: function(){
    return{
      imagen1 : imagen1,
      imagen2 : imagen2,
      imagen3 : imagen3
    }
  }
}
</script>
<style lang="scss" scoped>
  .hero {
    text-align: center;
    background-image: url('https://cr00.epimg.net/radio/imagenes/2019/03/28/bogota/1553787583_864116_1553787748_noticia_normal.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
</style>
