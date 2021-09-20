/* eslint-disable no-undef */
<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-10">
          <div class="wrap d-md-flex">
            <div class="login-wrap p-4 p-lg-5">
              <div class="d-flex">
                <div class="w-100" style="margin-bottom: 6%; margin-top: 10%;">
                  <h1><strong style="font-size: 35px;">Editar Cliente</strong></h1>
                </div>
              </div>
              <form class="signin-form" method="POST">
                <div class="form-group mb-3">
                  <label class="label" for="name">Nombres</label>
                  <input type="text" class="form-control" name="name" placeholder="Nombre" required="">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Apellidos</label>
                  <input type="text" class="form-control" name="lastname" placeholder="Apellidos" required="">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Número Documento</label>
                  <input type="text" class="form-control" name="doc" placeholder="Numero documento">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Ciudad</label>
                  <select class="form-control" required="">
                      <option value="">Seleccione..</option>
                      <option value="CP">Ciudad Piloto</option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Número de Celular</label>
                  <input type="text" class="form-control" name="cel" placeholder="Numero de celular">
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control px-3 button is-dark" @click="actualizarCliente">Actualizar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
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
  .login-wrap {
      position: relative;
      background: #fff;
  }
  .text-wrap {
      color: #fff;
      height:500px;
  }
  .text-wrap, .login-wrap {
      width: 100%;
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
  export default {
    name: "EventSingle",
    data() {
      return {
        info:null,
      }
    },
    methods: {
      actualizarCliente(e){
        e.preventDefault();
        alert("nananana");
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
