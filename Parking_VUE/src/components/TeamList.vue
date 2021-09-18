<template>
  <div class="events container">
    <h2 class="subtitle is-3">Equipo</h2>
    <div class="columns is-multiline">
      <div v-for="team in teams" :team="team" :key="team.id" class="column is-one-quarter">
          <TeamCard :team="team" />
      </div>
    </div>
  </div>
</template>
<script>
import TeamCard from "@/components/TeamCard";
export default {
  name: "TeamList",
  components: {
    TeamCard
  },
  data() {
    return {
      servi: {},
      teams: [
        {
          id: 1,
          name: "Carolina Montes",
          category: "Equipo",
          theme: "Tripulante Misioón TIC 2021",
          featuredImage: "banner_1.jpeg",
        },
        {
          id: 2,
           name: "Heysel Arnedo",
          category: "Equipo",
          theme: "Tripulante Misioón TIC 2021",
          featuredImage: "banner_1.jpeg",
         
        },
        {
          id: 3,
          name: "Frank Chico",
          category: "Equipo",
          theme: "Tripulante Misioón TIC 2021",
          featuredImage: "banner_1.jpeg",
        },
        {
          id: 4,
           name: "Juan Robayo",
          category: "Equipo",
          theme: "Tripulante Misioón TIC 2021",
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