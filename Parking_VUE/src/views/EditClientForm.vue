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
              <form @submit.prevent="actualizarCliente(cliente)" class="signin-form">
                  <input v-model="cliente.id_usuario" type="hidden" class="form-control" name="id_usuario" placeholder="Nombre" required="">
                  <input v-model="cliente._id" type="hidden" class="form-control" name="id_cliente" placeholder="Nombre" required="">

                <div class="form-group mb-3">
                  <label class="label" for="name">Nombres</label>
                  <input v-model="cliente.nombre" type="text" class="form-control" name="nombre" placeholder="Nombre" required="">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Apellidos</label>
                  <input v-model="cliente.apellido" type="text" class="form-control" name="apellido" placeholder="Apellidos" required="">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Documento</label>
                  <input v-model="cliente.documento" type="text" class="form-control" name="documento" placeholder="Documento" required="">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Ciudad</label>
                  <select v-model="cliente.id_ciudad" class="form-control" id="ciudad" required="">
                      <option>Seleccione...</option>
                      <option v-for="ciudad in ciudades" :key="ciudad.id"  v-bind:value="cliente.id_ciudad" >{{ciudad.ciudad}}</option>
                  </select>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Número de Celular</label>
                  <input v-model="cliente.telefono" type="text" class="form-control" name="cel" placeholder="Numero de celular">
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
        cliente:"",
        ciudadSeleccionada : {},
        ciudades: ciudades, 
        
      }
    }, 
    methods: {
      actualizarCliente(item){
        var itemUsuario = {
          "nombre": item.nombre,
          "apellido": item.apellido,
        };
        this.axios.put('user/usuarioup/'+ this.cliente.id_usuario ,itemUsuario)
          .then( res => {     
            //let id_usuario_editado = res.data._id;       
            console.log(res.data);
            console.log("item",item)
            var itemCliente={
              "id_ciudad": item.id_ciudad,
              "documento": item.documento,
              "telefono" : item.telefono,
              "id" : item._id,
            }
            this.axios.put('client/up/'+item._id,itemCliente)
              .then(res =>{
                console.log("cliente",res);
                this.$swal("Excelente! , Se ha actualizado correctamente");
              })
              .catch( e =>{
                console.log("actualizar Cliente ", e);
                this.$swal("Error! , no hemos actualizado información");

              })

          })
          .catch( e =>{
            console.log(e);
            this.$swal("No hemos podido realizar la actualizacion intente más tarde");
          })
      }

    }, 
    beforeCreate(){     
      this.axios.get('user/getusuario/'+localStorage.id_user)
        .then( res => {
          var infousuario = res.data.usuario;
          delete infousuario.date;
          var infocliente = res.data.cliente;
          delete infocliente.date;
          this.cliente= Object.assign({},infousuario,infocliente);
        })  
      
    }
}
</script>
