<template>
    <div class="authors-page">
      <h1>Авторы</h1>
      <ul class="author-categories">
        <li v-for="(author, index) in authors" :key="index">
          <h2>{{ author.name }}</h2>
          <ul class="sub-authors">
            <li v-for="(book, bookIndex) in author.books" :key="bookIndex">
              <a :href="book.link">{{ book.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AuthorsPage',
  
    data() {
      return {
        authors: [
          {
            name: 'Лев Толстой',
            books: [
              { title: 'Война и мир', link: '#' },
              { title: 'Анна Каренина', link: '#' },
              { title: 'Крейцерова соната', link: '#' },
            ]
          },
          {
            name: 'Федор Достоевский',
            books: [
              { title: 'Преступление и наказание', link: '#' },
              { title: 'Идиот', link: '#' },
              { title: 'Братья Карамазовы', link: '#' },
            ]
          },
          {
            name: 'Агата Кристи',
            books: [
              { title: 'Убийство в Восточном экспрессе', link: '#' },
              { title: 'Десять негритят', link: '#' },
              { title: 'Смерть на Ниле', link: '#' },
            ]
          },
          // Дополнительные авторы и книги могут быть добавлены здесь
        ]
      };
    },
  };
  </script>
  
  <style scoped>

.authors-page {
  text-align: center;
  color: #ff8c00; /* Оранжевый цвет для выделения заголовка */
  margin-bottom: 2rem;
}

.author-categories {
  list-style: none;
  padding: 0;
}

.author-categories > li {
  margin: 1rem 0;
}

h1 {
    color: #ff8c00; /* Оранжевый цвет для важных заголовков жанров или авторов */
  margin-bottom: 0.5rem;
  font-size: 50px;
  text-align: center;
}

h2 {
  color: #ff8c00; /* Оранжевый цвет для важных заголовков жанров или авторов */
  margin-bottom: 0.5rem;
  font-size: 30px;
  text-align: start;
  margin-left: 1rem;
}


.sub-authors {
  list-style: none;
  padding-left: 1rem;
  text-align: start;
  font-size: 20px;
  margin-left: 1rem;
}


.sub-authors li a {
  text-decoration: none;
  color: #000; /* Черный цвет для обычного текста */
  transition: transform 0.3s ease, color 0.3s ease;
}


.sub-authors li a:hover {
  transform: translateX(10px);
  color: #ff8c00; /* Оранжевый цвет и смещение для элементов при наведении */
}
  
  /* Здесь можно добавить дополнительные стили для списка авторов */
  </style>
  