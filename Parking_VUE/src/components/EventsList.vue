<template>
  <div class="events container">
    <h2 class="subtitle is-3">Noticias</h2>
    <div class="columns is-multiline">
      <div v-for="event in events" :event="event" :key="event.id" class="column is-half">
        <router-link :to="`/event/${event.id}`">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import EventCard from "@/components/EventCard";
export default {
  name: "EventsList",
  components: {
    EventCard
  },
  data() {
    return {
      event: {},
      events: [
        {
          id: 1,
          name: "Finalizan Obras",
          category: "Noticias",
          theme:
            "La ANSV y ENterritorio finalizan obras de alto impacto en Buga con una inversión de más de 150 millones de pesos.",
          description:
            "La ANSV y ENterritorio finalizan obras de alto impacto en Buga con una inversión de más de 150 millones de pesos.",
          featuredImage: "not_1.jpg",
        },
        {
          id: 2,
          name: "Nueva Malla Vial ",
          category: "Noticias",
          theme:
            "Arranca la fase de preconstrucción de la Nueva Malla Vial del Valle del Cauca- Corredor Accesos Cali.",
          description:
            "Arranca la fase de preconstrucción de la Nueva Malla Vial del Valle del Cauca- Corredor Accesos Cali.",
          featuredImage: "not_2.jpg",
        },
        {
          id: 3,
          name: "Emergencia Vial",
          category: "Noticias",
          theme:
            "Gobierno nacional atiende emergencia vial en el km 121+200 de la vía Los Curos - Málaga, departamento de Santander.",
          description:
            "Gobierno nacional atiende emergencia vial en el km 121+200 de la vía Los Curos - Málaga, departamento de Santander.",
          featuredImage: "not_3.jpg",
        },
        {
          id: 4,
          name: "Licencias de Conducción",
          category: "Noticias",
          theme:
            "Tras resultados de estudios de la Universidad de los Andes, Gobierno avanza en reglamentación de licencia de conducción para la comunidad sord.",
          description:
            "Tras resultados de estudios de la Universidad de los Andes, Gobierno avanza en reglamentación de licencia de conducción para la comunidad sord.",
          featuredImage: "not_5.jpg",
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
