<template>
    <div class="book">
      <img :src="book.cover" :alt="`Книга ${book.title}`">
      <div class="book-details">
        <h3>{{ book.title }}</h3>
        <p>Автор: {{ book.author }}</p>
        <p>Жанр: {{ book.genre }}</p>
        <p>Описание книги: {{ book.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookItem',
    props: {
      book: {
        type: Object,
        required: true
      }
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
            cover: 'cover-url-1.jpg',
        },
        {
            id: 2,
            title: 'Новая книга 2',
            author: 'Автор 2',
            genre: 'Роман',
            description: 'Описание новой книги 2',
            cover: 'cover-url-2.jpg',
        },
        // Таким же образом добавьте другие книги
        ],
        popularBooks: [
        {
            id: 3,
            title: 'Популярная книга 1',
            author: 'Автор 3',
            genre: 'Боевик',
            description: 'Описание популярной книги 1',
            cover: 'cover-url-3.jpg',
        },
        // Добавьте другие популярные книги
        ],
        bestsellers: [
        {
            id: 4,
            title: 'Бестселлер 1',
            author: 'Автор 4',
            genre: 'Детектив',
            description: 'Описание бестселлера 1',
            cover: 'cover-url-4.jpg',
        },
        // Добавьте другие бестселлеры
        ],
    };
},

  };
  </script>
  