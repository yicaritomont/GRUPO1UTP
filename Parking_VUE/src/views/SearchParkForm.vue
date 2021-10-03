<template>
  <section class="ftco-section">
    <div class="container ">
      <div class="row justify-content-center marca-de-agua">
            <img alt="" src="../assets/logo-para-el-banner.png" style="hidden" />
        <div class="col-md-12 col-lg-10">
          <div class="w-100" style="margin-bottom: 6%; margin-top: 10%;">
            <h1><strong style="font-size: 35px;">Busca Tu parqueadero</strong></h1>
          </div>
          <form @submit.prevent="listarParqueadero()" >
          <div class="wrap d-md-flex ">
              <div class="container">
                  <div class="form-group mb-3">
                    <label class="label" for="password">Ciudad</label>
                    <select v-model="ciudadSeleccionada" class="form-control" id="ciudad" required="">
                        <option value="0">Seleccione..</option>
                        <option v-for="ciudad in ciudades" :key="ciudad.id" :value="ciudad.id">{{ciudad.ciudad}}</option>
                    </select>
                  </div>
                  
              </div>
              <div class="container">
                <div class="form-group mb-3">
                  <label class="label" for="password">Zona</label>
                  <input v-model="zona" type="text" class="form-control" name="zona" placeholder="zona">
                </div>
              </div>
              <div class="container">
                <div class="form-group mb-3">
                  <button type="submit" class="form-control px-3 button is-dark" style="margin-top: 10%;">Buscar</button>
                </div>
              </div>
          </div>
          </form>
          <div class="container">
              <div v-for="parqueadero in parqueaderos" :parqueadero="parqueadero" :key="parqueadero.id" class="column">
                  <div class="wrap d-md-flex div-resultado">
                    <div class="form-group mb-4 resultado" style="text-align: center;">
                      <label class="label" style="font-size: 20px;">{{parqueadero.nombre_parqueadero}}</label>
                      <router-link :to="`/separacion/${parqueadero._id}`" class="form-control px-3 button is-dark" style="margin-top: 10%;">Separar Espacio</router-link>
                    </div>
                    <div class="form-group mb-4 resultado">
                      <label class="label" >{{parqueadero.servicios}}</label>
                    </div>
                    <div class="form-group mb-4 resultado">
                      <div><b>Teléfono :</b> {{parqueadero.telefono}}</div>
                      <div><b>Correo :</b> {{parqueadero.correo}}</div>
                      <div><b>Dirección :</b> {{parqueadero.direccion}}</div>
                      <div><b>Ciudad :</b> {{parqueadero.id_ciudad}}</div>
                    </div>
                  </div>
                
                <!--<router-link :to="`/event/${event.id}`">
                  
                </router-link>-->
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
        parqueadero:"",
        parqueaderos:{},
        ciudadSeleccionada : {},
        ciudades: ciudades,
        zona :"",
      }
    },
    methods: {
      listarParqueadero(){
        let item = {'ciudad': this.ciudadSeleccionada, 'zona': this.zona};
        console.log(item);
        this.axios.get('park/search/' +this.ciudadSeleccionada + '/' +this.zona )
          .then( res => {
            console.log(res);
            this.parqueaderos = res.data;
            
          })
          .catch( e =>{
            console.log(e);
            this.$swal("Se ha presentado un error en la búsqueda, intente de nuevo");
          })
      
        

      }

    }
}
</script>
