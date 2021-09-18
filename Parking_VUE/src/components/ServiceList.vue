<template>
  <div class="events container">
    <h2 class="subtitle is-3">Servicios</h2>
    <div class="columns is-multiline">
      <div v-for="service in services" :service="service" :key="service.id" class="column is-one-third">
          <ServiceCard :service="service" />
      </div>
    </div>
  </div>
</template>
<script>
import ServiceCard from "@/components/ServiceCard";
export default {
  name: "ServiceList",
  components: {
    ServiceCard
  },
  data() {
    return {
      servi: {},
      services: [
        {
          id: 1,
          name: "Reserva Tu Espacio",
          category: "Servicios",
          description:
            "En ParkingZone es la forma más rápida, segura y sencilla de encontrar un espacio para tu vehículo, en las ciudades más cogestionadas del país.",
          theme: "ParkingZone tu lugar mas seguro.",
          featuredImage: "banner_1.jpeg",
        },
        {
          id: 2,
          name: "Publica Tu Parking",
          category: "Servicios",
          description:
            "Publicar gratis tu parquedero y encuentra clientes rápidamente. Puedes ofrecer los servicios adicionales que tengas en tu parqueadero",
          theme: "ParkingZone Donde encuentras a tus clientes.",
          featuredImage: "banner_1.jpeg",
         
        },
        {
          id: 3,
          name: "Lavado de vehículos",
          category: "Servicios",
          description:
            "Servicio de lavado de autos mienrtas tu carro esta estacionado en nuestros parquiaderos, tu carro limpio por dentro y por fuera. Con un lavado ecológico.",
          theme: "Disponible en algunos de nuestros parqueaderos.",
          featuredImage: "banner_1.jpeg",
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.events {
  margin-top: 100px;
  text-align: center;
}
</style>