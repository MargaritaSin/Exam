<template>
    <div>
      <section class="new-releases section">
        <h2>Новинки</h2>
        <p>Самые свежие книги, только что вышедшие в продажу.</p>
        <book-item v-for="book in newReleases" :key="book.id" :book="book" />
      </section>
  
      <section class="popular-books section">
        <h2>Популярные книги</h2>
        <p>Список книг, которые пользуются большой популярностью у читателей.</p>
        <book-item v-for="book in popularBooks" :key="book.id" :book="book" />
      </section>
  
      <section class="bestsellers section">
        <h2>Бестселлеры</h2>
        <p>Самые продаваемые книги на данный момент.</p>
        <book-item v-for="book in bestsellers" :key="book.id" :book="book" />
      </section>
    </div>
  </template>
  
  <script>
  import BookItem from './BookItem.vue';
  
  export default {
    name: 'BookSections',
    components: {
      BookItem
    },
    data() {
      return {
        newReleases: [
          // Здесь будут объекты с информацией о новых книгах
        ],
        popularBooks: [
          // Здесь будут объекты с информацией о популярных книгах
        ],
        bestsellers: [
          // Здесь будут объекты с информацией о бестселлерах
        ],
      };
    },
    methods: {
      // Здесь можно добавить методы, если они вам нужны
    },
  };
  </script>
  