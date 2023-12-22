<template>
  <div id="app">
    <!-- Вставляем компонент Menu в верхнюю часть -->
    <AppCarus></AppCarus>
    <AppMain></AppMain>
    <AppFoot></AppFoot>
    <!-- Остальное содержимое приложения -->

    <router-view />
  </div>
</template>

<script>
// Подключаем компонент Menu
import AppCarus from "./components/AppCarus.vue";
import AppMain from "./components/AppMain.vue";
import AppFoot from "./components/AppFoot.vue";

export default {
  components: {
    AppCarus,
    AppMain,
    AppFoot,
  },
  // Остальная логика вашего приложения
};
</script>

<!-- Стили для вашего приложения -->
<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>
