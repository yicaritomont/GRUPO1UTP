<template>
  <div class="event-card">
    <div class="card">
      <div class="card-content">
        <h2 class="is-size-4 has-text-weight-bold">{{ team.name }}</h2>
        <small class="event-date">{{ team.category }}</small>
        <img v-bind:src="require('../assets/' + team.featuredImage)" alt="Equipo"/>
      </div>
    </div>
    <div style="height: 100px;">
      <hr>
      <h2 class="is-size-4 has-text-weight-bold">{{ team.name }}</h2>
      <p>{{ team.description }}</p>
      <small>{{ team.theme }}</small>
      <hr>
    </div>
  </div>
</template>
<script>
export default {
  props: ["team"]
};
</script>
<style lang="scss" scoped>
.card {
  height: 200px;
  background-position: center;
  background-size: cover;
  text-align: center;
}
.card-content {
  padding-top: 50px;
  position: absolute;
  color: #fff;
  background-color: rgb(210 10 17);
  top: 0;
  padding: 10px;
  height: 200px;
  width: 100%;
  span {
    font-size: 18px;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 10px;
    right: 0;
  }
  h2 {
    margin-top: 10px;
  }
}
.event-date {
  background-color: #151515;
  color: #fff;
  font-size: 0.75em;
  padding: 2px 10px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
