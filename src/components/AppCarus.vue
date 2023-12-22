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
    <input type="text" placeholder="Поиск книг" />
    <button>Войти</button>
  </header>
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
    };
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
    }
  }
};
</script>


<style scoped>
h3 {
  align-self: center;
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
}

button {
  padding: 5px 10px;
  border: 0.5px solid #ff6600;
}

button:hover {
  background-color: #ff6600;
  color: white;
}

</style>
