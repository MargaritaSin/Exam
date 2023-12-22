<template>
    <section class="review">
      <h2>Рецензии</h2>
      <div class="review-buttons">
        <button @click="showReview('books')">Рецензии на книги</button>
        <button @click="showReview('experts')">Рецензии экспертов</button>
        <button @click="showReview('novelties')">Рецензии на новинки</button>
        <button @click="showReview('critics')">Рецензии критиков</button>
      </div>
      <div class="review-info" v-if="currentReview">
        <div class="author">
          <img :src="currentReview.image" :alt="currentReview.alt">
          <h3>{{ currentReview.author }}</h3>
          <p>Статус: {{ currentReview.status }}</p>
        </div>
        <div class="review-details">
          <h3>{{ currentReview.title }}</h3>
          <p>Оценка: {{ currentReview.rating }}</p>
          <p>{{ currentReview.text }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reviews: {
          books: {
            image: 'bookcover1.jpg',
            alt: 'Книга 1',
            author: 'Ирина Витальевная',
            status: 'новичок',
            title: 'Марина Повалей "Сначало было похищение"',
            rating: '4/5',
            text: 'Отзыв о книге Марина Повалей "Сначала было похищение" ...'
            // Полный текст рецензии
          },
          // Определения для других рецензий (experts, novelties, critics)
          experts: { image: 'bookcover1.jpg',
            alt: 'Книга 2',
            author: 'Крутой эксперт',
            status: 'эксперт',
            title: 'Сумерки"',
            rating: '2/5',
            text: 'Лютый треш какой то' },
          novelties: { /* ... */ },
          critics: { /* ... */ }
        },
        currentReview: null
      };
    },
    methods: {
      showReview(type) {
        this.currentReview = this.reviews[type];
      }
    },
    mounted() {
      this.showReview('books'); // Показать рецензии на книги по умолчанию
    }
  };
  </script>
  
  <style>
    /* Ваши стили */
  </style>
  