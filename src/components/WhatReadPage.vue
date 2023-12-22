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
        <div class="books-container">
            <book-item v-for="book in popularBooks" :key="book.id" :book="book" class="book-item" />
        </div>

      </section>
  
      <section class="bestsellers section">
        <h2>Бестселлеры</h2>
        <p>Самые продаваемые книги на данный момент.</p>
        <div class="books-container">
            <book-item v-for="book in bestsellers" :key="book.id" :book="book" />
        </div>
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
            cover: 'book3.jpg'
        }
        // ...другие новые книги
      ],
      popularBooks: [
      {
          id: 1,
          title: 'Новая книга 1',
          author: 'Автор 1',
          genre: 'Фантастика',
          description: 'Описание новой книги 1',
          cover: 'book4.jpg',
        },
        {
          id: 2,
          title: 'Новая книга 2',
          author: 'Автор 2',
          genre: 'Роман',
          description: 'Описание новой книги 2',
          cover: 'book5.jpg',
        },
        {
            id: 3,
            title: 'Новая книга 3',
            author: 'Автор 3',
            genre: 'Роман',
            description: 'Описание новой книги 3',
            cover: 'book6.jpg'
        }
      ],
      bestsellers: [
      {
          id: 1,
          title: 'Новая книга 1',
          author: 'Автор 1',
          genre: 'Фантастика',
          description: 'Описание новой книги 1',
          cover: 'book7.jpg',
        },
        {
          id: 2,
          title: 'Новая книга 2',
          author: 'Автор 2',
          genre: 'Роман',
          description: 'Описание новой книги 2',
          cover: 'book8.jpg',
        },
        {
            id: 3,
            title: 'Новая книга 3',
            author: 'Автор 3',
            genre: 'Роман',
            description: 'Описание новой книги 3',
            cover: 'book4.jpg'
        }
      ],
    };
  },
  // ...методы, если они вам нужны
};
  </script>
  
  <style scoped>
  .section {
    margin-bottom: 40px; /* Отступы между разделами */
    display: flex;
    flex-direction: column;
  }
  
  .section .books-container {
    display: flex;
    flex-wrap: wrap; /* Позволяет элементам переноситься на новую строку */
    justify-content: space-around; /* Расстояние между карточками */
  }
  
  .section h2 {
    color: #f60; /* Оранжевый цвет для заголовков разделов */
    font-size: 45px;
    align-self: center;
  }

  .section p {
    font-size: 20px;
    align-self: center;
  }
  
  /* Остальные стили для страницы, если нужны */
  </style>
  