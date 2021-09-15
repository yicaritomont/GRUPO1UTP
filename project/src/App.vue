<template>
  <div id="app">
    <Header/>
    <HeaderSlide/>
    <Servicios/>
    <Noticias/>
    <Equipo/>
    <Footer/>
  </div>
</template>

<script>
import Equipo from './components/Pagina/Equipo.vue'
import Header from './components/Pagina/Header.vue'
import HeaderSlide from './components/Pagina/HeaderSlide.vue'
import Servicios from './components/Pagina/Servicios.vue'
import Noticias from './components/Pagina/Noticias/Noticias.vue'
import Footer from './components/Pagina/Footer.vue'
export default {
  name: 'App',
  components: {
    Equipo,
    Header,
    HeaderSlide,
    Servicios,
    Noticias,
    Footer
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
