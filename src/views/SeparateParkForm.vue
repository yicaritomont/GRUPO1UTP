<template>
  <section class="ftco-section">
    <div class="container ">
      <div class="row justify-content-center marca-de-agua">
            <img alt="" src="../assets/logo-para-el-banner.png" style="hidden" />
        <div class="col-md-12 col-lg-10">
          <div class="w-100" style="margin-bottom: 6%; margin-top: 10%;">
            <h1><strong style="font-size: 35px;">Separar Espacio de Parqueo</strong></h1>
          </div>
          <form @submit.prevent="separarParqueadero()" >
              <input v-model="parqueadero._id" name="id_parqueadero" type="hidden">
              <hr>
              <div class="container">
                <div class="form-group mb-3">
                  <label class="label" for="password">Lugar</label>
                  <p class="form-control">{{parqueadero.nombre_parqueadero}}</p>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Servicios</label>
                  <p class="form-control" style="height:auto">{{parqueadero.servicios}}</p>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Contacto</label>
                  <p class="form-control">{{parqueadero.telefono}} - {{parqueadero.direccion}}</p>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Fecha</label>
                  <date-picker v-model="fecha" class="fecha" type="datetime" valueType="format" style="border: 0 important!;background-color: #f2f2f2 important!; padding-top:5px;"></date-picker>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Servicio a Tomar</label>
                  <textarea v-model="servicio" class="form-control" name="servicios" style="height:100px;"></textarea>
                </div>
                <div class="form-group mb-3 d-md-flex">
                  <button type="submit" class="form-control px-3 button is-dark" style="margin-top: 10%;">Separar</button>
                  <router-link :to="`/busqueda`" class="form-control px-3 button is-dark" style="margin-top: 10%;">Regresar</router-link>
                </div>
              </div>
          </form>
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
  .fecha{
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
    width: 100%;
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
  import DatePicker from 'vue2-datepicker';
  //import 'vue2-datepicker/index.css';
  import '../assets/index.css';
  let ciudades = [
    {
        "id": 1,
        "ciudad": "Ciudad Piloto",
    }
  ];
  export default {
    name: "EventSingle",
    components: { DatePicker },
    data() {
      return {
       parqueadero:{}, 
        ciudadSeleccionada : {},
        ciudades: ciudades,
        id_cliente: localStorage.getItem("id_user"),
        fecha: "",
        servicio:"",
      }
    },    
    created() {
      console.log(this.$route.params.id);
        const ID = this.$route.params.id;
        this.axios.get('park/'+ID)
          .then( res => {
            var parqueadero = res.data;
            this.parqueadero = parqueadero;            
            
        })
    },
    methods: {
      separarParqueadero(){      
        let item = {
          'id_parqueadero': this.parqueadero._id, 
          'nombre_parqueadero':this.parqueadero.nombre_parqueadero,
          'contacto_parqueadero': this.parqueadero.telefono + ' '+ this.parqueadero.direccion,
          'id_cliente': this.id_cliente, 
          'nombre_cliente':localStorage.nombre_usuario ,
          'contacto_cliente': localStorage.telefono,
          "fecha": this.fecha, 
          "descripcion_servicio":this.servicio};
        this.axios.post('date/nuevo',item)
          .then( res => {
            console.log("Separacion",res);
            if(res.status == 200){
              this.$swal("Exitoso! se ha registrado su separación");
              location.reload();
            }
            else{
              this.$swal("Error al realizar la separación, intente más tarde");

            }
            
          })
          .catch( e =>{
            console.log(e);
            this.$swal("Error al realizar la separación, intente más tarde");
          })
        
      }

    },
}
</script>
