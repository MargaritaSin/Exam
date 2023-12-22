<template>
  <div id="app">
    <AppCarus></AppCarus>
    <router-view />
    <AppFoot></AppFoot>
  </div>
</template>

<script>
// Вам больше не нужно импортировать MainPage сюда, так как он будет использоваться через маршрутизацию
import AppCarus from "./components/AppCarus.vue";
import AppFoot from "./components/AppFoot.vue";

export default {
  components: {
    AppCarus,
    AppFoot
  },
  // Остальная логика вашего приложения
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Используем min-height вместо height для корректного заполнения всего экрана */
}
</style>
