<template>
  <section class="ftco-section">
    <div class="container ">
      <div class="row justify-content-center marca-de-agua">
            <img alt="" src="../assets/logo-para-el-banner.png" style="hidden" />
        <div class="col-md-12 col-lg-10">
          <div class="w-100" style="margin-bottom: 6%; margin-top: 10%;">
            <h1><strong style="font-size: 35px;">Solicitudes de cliente</strong></h1>
          </div>
          <div class="container">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Parqueadero</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Contacto</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Fecha</th>
                  </tr> 
                </thead>
                <tbody>
                  <tr  v-for="parqueadero in parqueaderos" :parqueadero="parqueadero" :key="parqueadero.id">
                    <td>{{parqueadero.parqueadero}}</td>
                    <td>{{parqueadero.cliente}}</td>
                    <td>{{parqueadero.contacto_cliente}}</td>
                    <td>{{parqueadero.servicios}}</td>
                    <td>{{parqueadero.fecha}}</td>
                  </tr>  
                </tbody>
              </table>
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
  let parqueaderos = [
    {
        "id": 1,
        "cliente": "Pepito",
        "contacto_cliente": 3152369869,
        "parqueadero": "El pijao Park",
        "fecha": "26/09/2021 10:00:00",
        "servicios": "necesito servicio de parqueo",
    },
    {
        "id": 2,
        "cliente": "Pepito",
        "contacto_cliente": 3152369869,
        "parqueadero": "El pijao Park",
        "fecha": "26/09/2021 11:00:00",
        "servicios": "servicio de parqueo y lavado",
    },
    {
        "id": 3,
        "cliente": "Pepito",
        "contacto_cliente": 3152369869,
        "parqueadero": "El pijao Park",
        "fecha": "26/09/2021 12:00:00",
        "servicios": "servicio de lavado",
    }
  ];
  export default {
    name: "EventSingle",
    data() {
      return {
        parqueadero:null,
        parqueaderos:parqueaderos,
        ciudadSeleccionada : {},
        ciudades: ciudades
      }
    }
}
</script>
