<template>
  <div>
    <footer>
    <div class="row">
    <div class="col-6">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button"  aria-expanded="true">
                    Información de sitio
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Este proyecto permitirá fortalecer nuestro conocimiento, para aplicarlo en el ámbito empresarial.</p>
                        <p>El eje central del proyecto en la localización de parqueaderos disponibles en una determinada zona, con la finalidad
                            de separarlo.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button" type="button" aria-expanded="true">
                        <a href="https://github.com/yicaritomont/GRUPO1UTP"><i class="bi-github" role="img" aria-label="GitHub"></i>Nuestro Repositorio GIT HUB </a>
                    </button>
                </h2>
            </div>
        </div>
    </div>
    <div class="col-6">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div>
                        <ol class="list-group list-group-numbered">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        Carolina  Montes
                                        <span class="badge bg-primary rounded-pill">Analista de Software </span>
                                    </div>
                                </div>
                                <a href="https://www.linkedin.com/in/ycarolinamontes/" target="_blank"><i class="bi bi-linkedin" style="font-size: 1.5rem;"></i></a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        Juan Robayo
                                        <span class="badge bg-primary rounded-pill">Desarrollador Backend </span>
                                    </div>
                                </div>
                                <a href="https://www.linkedin.com/in/juansrobayo/" target="_blank"><i class="bi bi-linkedin" style="font-size: 1.5rem;"></i></a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        Keryn García
                                        <span class="badge bg-primary rounded-pill">Tester </span>
                                    </div>
                                </div>
                                <a href="#" target="_blank"><i class="bi bi-linkedin" style="font-size: 1.5rem;"></i></a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        Heysel Arnedo
                                        <span class="badge bg-primary rounded-pill">Arquitecto de Software </span>
                                    </div>
                                </div>
                                <a href="https://www.linkedin.com/in/heysel-arnedo-b338b979/" target="_blank"><i class="bi bi-linkedin" style="font-size: 1.5rem;"></i></a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        Frank Chico
                                        <span class="badge bg-primary rounded-pill">Desarrollador Frontend </span>
                                    </div>
                                </div>
                                <a href="#" target="_blank"><i class="bi bi-linkedin" style="font-size: 1.5rem;"></i></a>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<hr>
<div class="row col-12">
    <p class="col-6 mb-0 text-muted">© 2021 Company, Inc</p>

    <ul class="nav col-6 justify-content-end">
        <li class="nav-item"><a class="nav-link px-2 text-muted"  href="index.html"><b>Inicio</b></a></li>
        <li class="nav-item"><a class="nav-link px-2 text-muted"  href="#Servicios"><b>Servicios</b></a></li>
        <li class="nav-item"><a class="nav-link px-2 text-muted" href="#Noticias"><b>Noticias</b></a></li>
        <li class="nav-item"><a class="nav-link px-2 text-muted" href="#Equipo"><b>Equipo</b></a></li>
    </ul>
</div>
</footer>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
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
