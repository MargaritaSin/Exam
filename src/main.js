
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Убедитесь, что роутер импортирован правильно

const app = createApp(App);

app.use(router); // Подключаем роутер к приложению

app.mount('#app');
