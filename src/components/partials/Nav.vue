<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="../../assets/logo-para-el-banner.png">
      
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbar" class="navbar-menu">
    <p v-if="auth" style="margin-top: 1.4%;color: #d71920;font-weight: bolder;"> Hola {{nombre_usuario}} !</p>
    <div class="navbar-start">
      <a href="/#Servicios" class="navbar-item">Servicios</a>
      <a href="/#Noticias" class="navbar-item">Noticias</a>
      <a href="/#Equipo" class="navbar-item">Equipo</a>
      <router-link to="/about" class="navbar-item">Detalles</router-link>
      <router-link v-if="auth && tipo_usuario =='C'" to="/editC" class="navbar-item">Mi información</router-link>
      <router-link v-if="auth && tipo_usuario == 'P'" to="/editP" class="navbar-item">Mi infomación</router-link>
      <router-link v-if="auth" to="/busqueda" class="navbar-item">Buscar Parqueaderos</router-link>
      <router-link v-if="auth" to="/listaSeparacion" class="navbar-item">Lista Separación</router-link>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <!-- Check that the SDK client is not currently loading before accessing is methods -->
          <div class="flex">
            <!-- show login when not authenticated -->
            <a v-if="!auth" @click="login" class="button is-dark"><strong>Iniciar Sesion / Registrarse</strong></a>
            <!-- show logout when authenticated -->
            <a v-if="auth" @click="logout" class="button is-dark"><strong>Cerrar Sesion</strong></a>
          </div>
            
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
      auth: localStorage.userLog,
      tipo_usuario : localStorage.tipo_usuario,
      id_usuario : localStorage.id_usuario,
      nombre_usuario : localStorage.nombre_usuario,
    };
  },
  methods: {
  // Log the user in
  login() {
    window.location.href = '/login';
  },
  // Log the user out
  logout() {
    localStorage.clear();
    this.$auth.logout({
      returnTo: window.location.origin
    });
  }
  }
}
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #D71920;
      }
    }
    .button{
      border-radius:50px;
      background-color:#D71920;
    }
  }
</style>
