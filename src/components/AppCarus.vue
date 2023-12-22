<template>
  <header>
    <h3>Сайт рецензий на книги</h3>
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <router-link :to="item.to">{{ item.text }}</router-link>
        </li>
      </ul>
    </nav>
    <input type="text" placeholder="Поиск книг" v-model="searchQuery" @keyup.enter="searchBooks" />
    <div id="login">
      <button @click="showLoginPopup">Войти</button>
      <button @click="showRegisterPopup">Регистрация</button>
    </div>
  </header>
  <!-- Модальное окно для входа -->
  <div v-if="showLogin" class="popup-overlay" @click="hidePopups">
    <div class="popup" @click.stop>
      <h2>Вход</h2>
      <!-- Форма входа -->
      <form class="subform">
        <input type="text" placeholder="Имя пользователя">
        <input type="password" placeholder="Пароль">
        <button type="submit">Войти</button>
      </form>
      <button class="form_btn" @click="hidePopups">Закрыть</button>
    </div>
  </div>
  <!-- Модальное окно для регистрации -->
  <div v-if="showRegister" class="popup-overlay" @click="hidePopups">
    <div class="popup" @click.stop>
      <h2>Регистрация</h2>
      <!-- Форма регистрации -->
      <form class="subform">
        <input type="text" placeholder="Имя пользователя">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Пароль">
        <button type="submit">Зарегистрироваться</button>
      </form>
      <button class="form_btn" @click="hidePopups">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, text: "Главная", to: "/" },
        { id: 2, text: "Что почитать", to: "/what-read" },
        { id: 3, text: "Жанры", to: "/genres" },
        { id: 4, text: "Авторы", to: "/authors" },
      ],
      searchQuery: '',
      showLogin: false,
      showRegister: false,
    };
  },
  methods: {
    searchBooks() {
      this.$router.push({ path: '/search', query: { query: this.searchQuery } });
    },
    showLoginPopup() {
      this.showLogin = true;
      this.showRegister = false;
    },
    showRegisterPopup() {
      this.showLogin = false;
      this.showRegister = true;
    },
    hidePopups() {
      this.showLogin = false;
      this.showRegister = false;
    },
  }
};
</script>


<style scoped>

.subform {
  display: flex;
  flex-direction: column;
  padding: 15px;
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 270px;
  align-self: center;
  z-index: 999;
}


h3 {
  align-self: center;
  font-size: 25px;
}

header {
  background-color: #f2e9e4;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  top: 0;
  width: 100%;
}

li {
  cursor: pointer;
  margin: 0 10px;
  align-self: center;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 20px;
}

li:hover {
  color: #ff6600;
}

h3:hover {
  color: #ff6600;
}

input {
  padding: 5px;
  margin: 10px;
  margin-right: 5px;
  border-radius: 30px;
  min-width: 250px;
}

button {
  padding: 5px 10px;
  border: 0.5px solid #ff6600;
  font-size: 15px;
  min-width: 120px;
  border-radius: 10px;
  margin-left: 10px;
}

button:hover {
  background-color: #ff6600;
  color: white;
}

</style>
