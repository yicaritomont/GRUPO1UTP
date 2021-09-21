<template>
  <div class="event-card">
    <div class="card">
      <div class="card-content">
        <small class="event-date">{{ service.category }}</small>
        <img v-bind:src="require('../assets/' + service.featuredImage)" alt="servicio" />
      </div>
    </div>
    <div style="height: 100px;">
      
      <p style="margin-top: 100px;">{{ service.description }}</p>
      <small>{{ service.theme }}</small>
      <hr>
    </div>
  </div>
</template>
<script>
export default {
  props: ["service"]
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
  background-color: rgba(0, 0, 0, 0.35);
  top: 0;
  padding: 10px;
  height: 300px;
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
