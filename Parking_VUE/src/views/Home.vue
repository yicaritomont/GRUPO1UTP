<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Reserva tú espacio    
        </h1>
        <h2 class="subtitle">
          La forma más rápida, segura y sencilla de encontrar un espacio para tu vehículo.
        </h2>
        <div class="button-block">
          <button v-if="!$auth.isAuthenticated" @click="login" class="button is-xl is-dark">Iniciar Sesión</button>
          <p v-if="$auth.isAuthenticated" class="is-size-5 has-background-dark welcome">Hola!, {{ $auth.user.name }}!</p>
        </div>
      </div>
    </div>
  </section>
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
export default {
  name: 'home',
  components: {
    EventsList,
    ServiceList,
    TeamList,
    Footer,
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
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