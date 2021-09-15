<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">PARKING ZONE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#Servicios"><b>Servicios</b></a>
          </li>
          <li class="nav-item">

            <a class="nav-link active" aria-current="page" href="#Noticias"><b>Noticias</b></a>
            
          </li> 
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#Equipo"><b>Equipo</b></a>
          </li>  
          <li class="nav-item">
            <button class="btn btn-primary" onclick="goTo('modulos/login/login.html')">Ingresar / Registrarme </button>
          </li>  
        </ul>        
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Header',
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
