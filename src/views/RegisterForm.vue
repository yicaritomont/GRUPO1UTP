<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-10">
          <div class="wrap d-md-flex">
            <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last lateral" style="margin-top: 5%;"></div>
            <div class="login-wrap p-4 p-lg-5">
              <div class="d-flex">
                <div class="w-100" style="margin-bottom: 6%; margin-top: 10%;">
                  <h1><strong style="font-size: 35px;">Registrarse</strong></h1>
                </div>
              </div>
              <form @submit.prevent="registerTest(usuario)" v-if="agregar">
                <div class="form-group mb-3">
                  <div class="flex">
                    <input v-model="usuario.tipo_usuario" type="radio" class="radio" value="P"  name="tipo_usuario" placeholder="Nombre" required=""> <b style="margin-left:10px">Tengo Parqueadero</b>
                    <input v-model="usuario.tipo_usuario" type="radio" class="radio" value="C"  name="tipo_usuario" placeholder="Nombre" required=""> <b style="margin-left:10px">Busco Parqueadero</b>

                  </div>
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Nombres</label>
                  <input v-model="usuario.nombre" type="text" class="form-control" name="nombre" placeholder="Nombre" required="">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Apellidos</label>
                  <input v-model="usuario.apellido" type="text" class="form-control" name="apellido" placeholder="Apellidos" required="">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="name">Correo Electrónico</label>
                  <input v-model="usuario.correo_electronico" type="text" class="form-control" name="correo_electronico" placeholder="Correo Electrónico" required="">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Contraseña</label>
                  <input v-model="usuario.contrasena" type="password" class="form-control" name="contrasena" placeholder="Contraseña" required="">
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control px-3 button is-dark">Registrarse</button>
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
  export default {
    name: "EventSingle",
     data() {
      return {
        usuarios: [],
        usuario: {},
        agregar: true,
      };
    },
    methods: {
      registerTest(item){
        this.axios.post('user/nuevo-usuario',item)
          .then( res => {
            let id_usuario_creado = res.data._id;
            if(item.tipo_usuario == "C") {
              let cliente = [{
                        'id_usuario' : id_usuario_creado,
                        'telefono' : '000',
                        }];
              this.axios.post('client/nuevo',cliente)
              .then(res =>{
                console.log("cliente",res);
              })
              .catch( e =>{
                console.log("crear Cliente ", e);
              })
            }
            if(item.tipo_usuario == "P") {
              let cliente = [{
                        'id_usuario' : id_usuario_creado,
                        'nombre_parqueadero' : 'Actualiza el nombre de tu parqueadero',
                        'servicios': 'Actualiza tus servicios',
                        'direccion' : "Actualiza la dirección de tu parqueadero",
                        'telefono' : '000',
                        'id_ciudad':'1',
                        }];
              this.axios.post('park/nuevo',cliente)
              .then(res =>{
                console.log("parqueadero",res);
              })
              .catch( e =>{
                console.log("crear PArqueadero ", e);
              })
            }
            this.usuarios.unshift(res.data);
            this.$swal("Excelente! , Se ha registrado correctamente");
            window.location.origin
            this.$router.push({name: "/login"});
            location.reload();

          })
          .catch( e =>{
            console.log(e);
            this.$swal("No hemos podido realizar el registro intente más tarde");
          })
          this.usuario = {}
      }
    }
}
</script>
