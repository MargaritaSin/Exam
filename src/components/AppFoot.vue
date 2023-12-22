<template>
  <div class="app">
  <footer>
    <div class="footer-content">
      <div class="contact-info">
        <p>
          Телефон: <span class="colored-text">{{ phoneNumber }}</span>
        </p>
        <p>
          Студент: <span class="colored-text">{{ whoIs }}</span>
        </p>
      </div>
      <div class="social-links">
        <a
          href="ссылка_на_ваш_facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../assets/VK.svg" alt="ВКонтакте" class="social-icon" />
          ВКонтакте
        </a>
        <a
          href="ссылка_на_ваш_twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../assets/YouTube.svg" alt="RuTube" class="social-icon" />
          RuTube
        </a>
        <a href="ссылка_на_телегу" target="_blank" rel="noopener noreferrer">
          <img
            src="../assets/Telegram.svg"
            alt="Telegram"
            class="social-icon"
          />
          Telegram
        </a>
      </div>
    </div>
    <p>&copy; 2023 Рецензии книг. Все права защищены.</p>
  </footer>
</div>
</template>

<script>
export default {
  name: "AppFoot",
  data() {
    return {
      phoneNumber: "+7 (800) 555-3535",
      whoIs: "Синяков Маргарита",
    };
  },
};
</script>

<style scoped>
footer {
  background-color: #f2e9e4;
  padding: 10px;
  width: 100%;
  text-align: center;
  color: black;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-info {
  text-align: left;
}

.colored-text {
  color: #ff6600; /* Оранжевый цвет */
}

.social-links a {
  display: flex;
  align-items: center;
  color: black;
  margin-right: 10px;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
  color: #ff6600;
}

.social-icon {
  width: 24px; /* Задаем явную ширину для иконок */
  height: 24px; /* Задаем явную высоту для иконок */
  margin-right: 8px; /* Отступ справа от иконки до текста */
}
</style>
