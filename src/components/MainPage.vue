<template>
    <AppMain class="swiper"></AppMain>
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
  import AppMain from "./AppMain.vue";

  export default {
    components: {
    AppMain, 
    },
    data() {    
      return {
        reviews: {
          books: {
            image: require('../assets/book1.jpg'),
            alt: 'Книга 1',
            author: 'Ирина Витальевна',
            status: 'новичок',
            title: 'Марина Повалей "Сначало было похищение"',
            rating: '4/5',
            text: 'Отзыв о книге Марина Повалей "Сначала было похищение" ...'
            // Полный текст рецензии
          },
          // Определения для других рецензий (experts, novelties, critics)
          experts: { 
            image: require('../assets/book2.jpg'),
            alt: 'Книга 2',
            author: 'Крутой эксперт',
            status: 'эксперт',
            title: 'Сумерки"',
            rating: '2/5',
            text: 'Лютый треш какой то' },
          novelties: {  image: 'bookcover1.jpg',
            alt: 'Книга 3',
            author: 'Крутой эксперт',
            status: 'эксперт',
            title: 'Сумерки"',
            rating: '2/5',
            text: 'Лютый треш какой то' },
          critics: {  image: 'bookcover1.jpg',
            alt: 'Книга новинка',
            author: 'Крутой эксперт',
            status: 'эксперт',
            title: 'Сумерки"',
            rating: '2/5',
            text: 'Лютый треш какой то' }
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
    .swiper {
    min-height: 400px;
    border: 2px solid #f58142;
}

.review {
  padding: 20px; /* Добавляем паддинг для секции */
  margin: auto; /* Центрируем секцию по середине */
  max-width: 800px; /* Максимальная ширина секции */
}

/* Заголовки */
h2 {
  margin: 0;
  padding-bottom: 10px; /* отступ снизу для заголовка */
  color: #333; /* темный текст */
}

/* Стилизация кнопок */
.review-buttons button {
  background-color: #f58142; /* Оранжевый цвет кнопки */
  border: none; /* без границ */
  padding: 10px 20px; /* внутренние отступы */
  margin-right: 10px; /* отступ справа */
  color: white; /* белый текст на кнопке */
  cursor: pointer; /* указатель при наведении */
  border-radius: 10px; /* скругленные углы */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* тень для красоты */
  transition: background-color 0.3s; /* плавное изменение цвета при наведении */
}

/* Стиль при наведении на кнопку */
.review-buttons button:hover {
  background-color: #e76f29; /* Слегка изменить цвет при наведении */
}

/* Отображение информации о рецензии */
.review-info {
  display: flex;
  margin-top: 20px; /* отступ сверху */
  border-top: 2px solid #f58142; /* тонкая оранжевая линия сверху */
}

.author {
  flex: 1; /* занимает 1 часть флекс-контейнера */
  padding: 10px;
}

.author img {
  max-width: 100%; /* изображение не выйдет за размеры блока */
  height: auto; /* высота автоматически регулируется */
  border: 1px solid #ccc; /* граница вокруг изображения */
  padding: 5px; /* отступ вокруг изображения */
  background-color: #fff; /* белый фон для изображения */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* небольшая тень для подсветки */
}

.review-details {
  flex: 2; /* занимает 2 части флекс-контейнера */
  padding: 10px;
}

.review-details h3 {
  color: #333; /* Цвет заголовка */
}

.review-details p {
  color: #666; /* Серый текст */
}
  </style>
  