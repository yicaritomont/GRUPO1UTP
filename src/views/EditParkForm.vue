/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-10">
          <form @submit.prevent="actualizarParqueadero(parqueadero)">
            <input v-model="parqueadero.id_usuario" type="hidden" class="form-control" name="id_usuario" placeholder="Nombre" required="">
            <input v-model="parqueadero._id" type="hidden" class="form-control" name="id_parqueadero" placeholder="Nombre" required="">
          <div class="wrap d-md-flex">
            <div class="login-wrap p-4 p-lg-5">
              <div class="d-flex">
                <div class="w-100" style="margin-bottom: 6%; margin-top: 10%;">
                  <h1><strong style="font-size: 35px;">Editar Parqueadero</strong></h1>
                </div>
              </div>
              <h1><strong style="font-size: 20px;">Información Personal</strong></h1>
                <div class="form-group mb-3">
                  <label class="label" for="name">Nombres</label>
                  <input v-model="parqueadero.nombre" type="text" class="form-control" name="name" placeholder="Nombre" required="">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Apellidos</label>
                  <input v-model="parqueadero.apellido" type="text" class="form-control" name="lastname" placeholder="Apellidos" required="">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Nombre del Parqueadero</label>
                  <input v-model="parqueadero.nombre_parqueadero" type="text" class="form-control" name="name_park" placeholder="Nombre del parqueadero">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Mis Servicios</label>
                  <textarea v-model="parqueadero.servicios" class="form-control" name="servicios" style="height:100px;">Deja un listado de tus servicios: (ejem Parqueadero Carros hora /fraccion $2.000 .. Lavado de vehiculos $...)</textarea>
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control px-3 button is-dark">Actualizar</button>
                </div>
            </div>
            <div class="text-wrap p-4 p-lg-5 ">
                <hr>
                <h1><strong style="font-size: 20px;">Ubicación</strong></h1>
                <div class="form-group mb-3">
                  <label class="label" for="password">Ciudad</label>
                  <select v-model="parqueadero.id_ciudad" class="form-control" id="ciudad" required="">
                      <option>Seleccione...</option>
                      <option v-for="ciudad in ciudades" :key="ciudad.id"  v-bind:value="parqueadero.id_ciudad" >{{ciudad.ciudad}}</option>
                  </select>
                </div>
                <h1><strong style="font-size: 20px;">Información Contacto</strong></h1>
                <div class="form-group mb-3">
                  <label class="label" for="name">Dirección</label>
                  <input v-model="parqueadero.direccion" type="text" class="form-control" name="dir" placeholder="Dirección">
                </div>
                <h1>Información de Contacto</h1>
                <div class="form-group mb-3">
                  <label class="label" for="name">Número de Teléfono</label>
                  <input v-model="parqueadero.telefono" type="text" class="form-control" name="tel" placeholder="Número de teléfono">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Correo Electrónico</label>
                  <input v-model="parqueadero.correo_electronico" type="text" readonly="true" class="form-control" name="email" placeholder="Correo Electrónico">
                </div>
            </div>
          </div>
        </form>
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
        parqueadero: "",
        ciudades: ciudades, 
      }
    },
    methods: {
      actualizarParqueadero(item){
        var itemUsuario = {
          "nombre": item.nombre,
          "apellido": item.apellido,
        };
        this.axios.put('user/usuarioup/'+ this.parqueadero.id_usuario ,itemUsuario)
          .then( res => {     
            //let id_usuario_editado = res.data._id;    
            let respuesta= res; // eslint-disable-line no-unused-vars
            var itemParqueadero={
              "id_ciudad": item.id_ciudad,
              "nombre_parqueadero": item.nombre_parqueadero,
              "servicios": item.servicios,
              "direccion": item.direccion,
              "telefono": item.telefono
            }
            this.axios.put('park/up/'+item._id,itemParqueadero)
              .then(res =>{
                this.$swal("Excelente! , Se ha actualizado correctamente",res);
              })
              .catch( e =>{
                this.$swal("Error! , no hemos actualizado información",e);

              })

          })
          .catch( e =>{
            this.$swal("No hemos podido realizar la actualizacion intente más tarde",e);
          })
      }

    },
    beforeCreate(){     
      this.axios.get('user/getusuario/'+localStorage.id_user)
        .then( res => {
          var infousuario = res.data.usuario;
          delete infousuario.date;
          var infoparqueadero = res.data.parqueadero;
          delete infoparqueadero.date;
          this.parqueadero= Object.assign({},infousuario,infoparqueadero);
        })  
      
    }
}
</script>
