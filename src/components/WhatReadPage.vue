<template>
    <div>
      <section class="new-releases section">
        <h2>Новинки</h2>
        <p>Самые свежие книги, только что вышедшие в продажу.</p>
        <div class="books-container">
            <book-item v-for="book in newReleases" :key="book.id" :book="book" />
        </div>
      </section>
  
      <section class="popular-books section">
        <h2>Популярные книги</h2>
        <p>Список книг, которые пользуются большой популярностью у читателей.</p>
        <book-item v-for="book in popularBooks" :key="book.id" :book="book" class="book-item" />

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
        {
          id: 1,
          title: 'Новая книга 1',
          author: 'Автор 1',
          genre: 'Фантастика',
          description: 'Описание новой книги 1',
          cover: 'book1.jpg',
        },
        {
          id: 2,
          title: 'Новая книга 2',
          author: 'Автор 2',
          genre: 'Роман',
          description: 'Описание новой книги 2',
          cover: 'book2.jpg',
        },
        {
            id: 3,
            title: 'Новая книга 3',
            author: 'Автор 3',
            genre: 'Роман',
            description: 'Описание новой книги 3',
            cover: 'book2.jpg'
        }
        // ...другие новые книги
      ],
      popularBooks: [
        // Здесь будут объекты с информацией о популярных книгах
      ],
      bestsellers: [
        // Здесь будут объекты с информацией о бестселлерах
      ],
    };
  },
  // ...методы, если они вам нужны
};
  </script>
  
  <style scoped>
  .section {
    margin-bottom: 40px; /* Отступы между разделами */
  }
  
  .section .books-container {
    display: flex;
    flex-wrap: wrap; /* Позволяет элементам переноситься на новую строку */
    justify-content: space-around; /* Расстояние между карточками */
  }
  
  .section h2 {
    color: #f60; /* Оранжевый цвет для заголовков разделов */
  }
  
  /* Остальные стили для страницы, если нужны */
  </style>
  