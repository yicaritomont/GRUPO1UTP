<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-10">
          <div class="wrap d-md-flex">
              <div class="container flex">
                  <div class="form-group mb-3">
                  <label class="label" for="password">Ciudad</label>
                  <select v-model="ciudadSeleccionada" class="form-control" id="ciudad" required="">
                      <option value="0">Seleccione..</option>
                      <option v-for="ciudad in ciudades" :key="ciudad.id" :value="ciudad.id">{{ciudad.ciudad}}</option>
                  </select>
                </div>
              </div>
            <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last lateral" style="margin-top: 5%;"></div>
            
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
        info:null,
        ciudadSeleccionada : {},
        ciudades: ciudades
      }
    },
    methods: {
      registerTest(e){
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
