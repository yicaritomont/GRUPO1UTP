/* eslint-disable no-undef */
<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 col-lg-10">
          <div class="wrap d-md-flex">
            <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last lateral">
              <div class="text w-100 pt-50" style="margin-top: 95%;">
                <div class="d-md-flex">
                  <p style="color:black;margin-left: 21px;"><b> ¿No tienes una cuenta?</b></p>
                  <a href="/register" class="button is-dark" style="height: 27px;border-radius: 50px;margin-left: 22px;">Registrate</a>
                </div>

              </div>
            </div>
            <div class="login-wrap p-4 p-lg-5">
              <div class="d-flex">
                <div class="w-100" style="margin-bottom: 6%; margin-top: 10%;">
                  <h1><strong style="font-size: 35px;">Iniciar Sesión</strong></h1>
                </div>
              </div>
              <form class="signin-form"  @submit.prevent="logintTest()">
                <div class="form-group mb-3">
                  <label class="label" for="name">Correo Electrónico</label>
                  <input v-model="email" type="text" class="form-control" name="email" placeholder="Correo Electrónico" required="">
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Contraseña</label>
                  <input v-model="password" type="password" class="form-control" name="password" placeholder="Contraseña" required="">
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control px-3 button is-dark" >Ingresar</button>
                </div>
                <br<br>
                <div class="d-md-flex">
                  <p style="color:black;margin-left: 21px;"><b></b></p>
                  <a href="/src/public/index.html" class="button is-dark" style="height: 27px;border-radius: 50px;margin-left: 22px;">Regresar</a>
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
    name: "Login",
    data() {
      return {
        usuarios: [],
        usuario: {},
        email : "",
        password: "",
      };
    },
    methods: {
      logintTest(){
        let item = {'email': this.email, 'password': this.password};
        this.axios.post('user/login',item)
          .then( res => {
            if(res.status == 200){
              this.usuarios.unshift(res.data);
              this.$swal("Excelente! logueado");
              localStorage.userLog = res.data;
              localStorage.id_user = res.data._id;
              localStorage.tipo_usuario = res.data.tipo_usuario;
              localStorage.nombre_usuario = res.data.nombre + ' '  + res.data.apellido;
              localStorage.telefono = res.data.telefono;
              window.location.origin
              this.$router.push({name: "home"});
              location.reload();
            }
            else{
              this.$swal("Verifique sus credenciales, estan incorrectas");
            }
          })
          .catch( e =>{
            this.$swal("Error al iniciar sesión, intente más tarde",e);
          })
          this.usuario = {}
      }

    }
}
</script>
