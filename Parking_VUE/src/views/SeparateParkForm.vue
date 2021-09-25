<template>
  <section class="ftco-section">
    <div class="container ">
      <div class="row justify-content-center marca-de-agua">
            <img alt="" src="../assets/logo-para-el-banner.png" style="hidden" />
        <div class="col-md-12 col-lg-10">
          <div class="w-100" style="margin-bottom: 6%; margin-top: 10%;">
            <h1><strong style="font-size: 35px;">Separar Espacio de Parqueo</strong></h1>
          </div>
          <div class="wrap">
          <hr>
              <div class="container">
                <div class="form-group mb-3">
                  <label class="label" for="password">Lugar</label>
                  <p class="form-control">{{parqueadero.nombre_parqueadero}}</p>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Servicios</label>
                  <p class="form-control">{{parqueadero.servicios}}</p>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Contacto</label>
                  <p class="form-control">{{parqueadero.telefono}} - {{parqueadero.direccion}}</p>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Fecha</label>
                  <input type="date" class="form-control" name="fecha">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Servicio a Tomar</label>
                  <textarea class="form-control" name="servicios" style="height:100px;"></textarea>
                </div>
                <div class="form-group mb-3 d-md-flex">
                  <button type="submit" class="form-control px-3 button is-dark" style="margin-top: 10%;" @click="separarParqueadero">Separar</button>
                  <router-link :to="`/busqueda`" class="form-control px-3 button is-dark" style="margin-top: 10%;">Regresar</router-link>
                </div>
              </div>
              
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .div-resultado{
   border: solid #f1f1f1;
   border-radius: 100px;
  }
  .div-resultado:hover{
   border: solid #ff9b9b;
  }
  .resultado{
    width: 30%;
    margin: 5% 5% 5% 5%;
  }
  .radio{
    height: 20px;
    width: 20px;
    border-radius: 100%;
    left: 10px;
     border:2px solid rgba(0,0,0,0.2);
  }
  .org-description {
    margin-top: 50px;
  }
  .lateral{
    background-image : url('../assets/logo-horizontal.png') !important;
    height: 150px;
    background-position: center;
    background-size: cover;
    text-align: center;
  }
  .button{
    background-color: #d71920 !important;
    color: white !important;
    font-weight: bolder;
  }
  .button:hover{
    background-color: black !important;
    color: white !important;
    font-weight: bolder;
  }
  .wrap {
      width: 100%;
      border-radius: 5px;
      -webkit-box-shadow: 0px 10px 34px -15px rgb(0 0 0 / 24%);
      -moz-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
      box-shadow: 0px 10px 34px -15px rgb(0 0 0 / 24%);
    
  }
  .marca-de-agua {    
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: auto;
    margin: auto;
  }
  .marca-de-agua img {
    width: 80%;
    height: auto;
    opacity: 0.1;
    position: absolute;
    margin-top: 30%;
    margin-left: 2%;
  }
  .login-wrap {
      position: relative;
      background: #fff;
  }
  .text-wrap {
      color: #fff;
      height:500px;
  }
  .text-wrap, .login-wrap {
      width: 50%;
  }
  .text-center {
      text-align: center !important;
  }
  .text-wrap {
      white-space: normal !important;
  }
  .form-control {
    height: 48px;
    background: rgba(0, 0, 0, 0.05);
    color: #000;
    font-size: 16px;
    border-radius: 50px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid transparent;
    padding-left: 20px;
    padding-right: 20px;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  .text-wrap .text h2 {
      font-weight: 900;
      color: #fff;
  }

  .login-wrap h3 {
      font-weight: 300;
  }

</style>
<script>
  //import axios from "axios";
  let ciudades = [
    {
        "id": 1,
        "ciudad": "Ciudad Piloto",
    }
  ];
  export default {
    name: "EventSingle",
    data() {
      return {
       parqueadero:{}, 
        ciudadSeleccionada : {},
        ciudades: ciudades,
        parqueaderos : [
          {
              "id": 1,
              "nombre": "Pepito",
              "apellido": "Perez",
              "documento": "12345678",
              "nombre_parqueadero": "El pijao Park",
              "servicios": "Lo que ofrece el parquedero",
              "ciudad": "ciudad Piloto",
              "direccion": "Calle 1 carrera 1",
              "telefono": 256833,
              "celular": 3124567896,
              "correo": "elpijaopark@gmail.com"
          },
          {
              "id": 2,
              "nombre": "Pepito",
              "apellido": "Perez",
              "documento": "12345678",
              "nombre_parqueadero": "El Parqueaderito",
              "servicios": "Lo que ofrece el parquedero",
              "ciudad": "ciudad Piloto",
              "direccion": "Calle 1 carrera 1",
              "telefono": 256833,
              "celular": 3124567896,
              "correo": "elpijaopark@gmail.com"
          },
          {
              "id": 3,
              "nombre": "nenenenene",
              "apellido": "Perez",
              "documento": "12345678",
              "nombre_parqueadero": "El Parqueaderito",
              "servicios": "Lo que ofrece el parquedero",
              "ciudad": "ciudad Piloto",
              "direccion": "Calle 1 carrera 1",
              "telefono": 256833,
              "celular": 3124567896,
              "correo": "elpijaopark@gmail.com"
          }
        ]
      }
    },    
    created() {
        const ID = Number(this.$route.params.id);
        let parqueadero = this.parqueaderos.find(parqueadero => parqueadero.id === ID);
        this.parqueadero = parqueadero;
    },
    methods: {
      separarParqueadero(e){
      
        e.preventDefault();
        alert("guarde!!!");
        /*var request = require("request");
        var options = { method: 'POST',
          url: 'https://dev-dmmyc9h2.us.auth0.com/oauth/token',
          headers: { 'content-type': 'application/json' },
          body: '{"client_id":"xkLayT4kLLTTMJRRst4M4AvekIb4sXLq","client_secret":"SYukBRvtdYMF0nSentINqQJ5iowGYh11gHo-2N88bI0Bwu_KYXcT4aiJ-2KCoqda","audience":"https://dev-dmmyc9h2.us.auth0.com/api/v2/","grant_type":"client_credentials"}' };

        request(options, function (error, response, body) {
          if(response.statusCode == "200"){
            console.log("OK");
            console.log(body);
          }

          if (error) throw new Error(error);
        });*/

      }

    }
}
</script>
