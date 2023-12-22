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
        <div class="review-cards">
            <div class="review-card" v-for="(review, index) in reviews[currentReviewCategory]" :key="index">
                <!-- Контент карточки, используя переменную review -->
                <div class="author">
                <img :src="review.image" :alt="review.alt">
                <h3>{{ review.author }}</h3>
                <p>Статус: {{ review.status }}</p>
                </div>
                <div class="review-details">
                <h3>{{ review.title }}</h3>
                <p>Оценка: {{ review.rating }}</p>
                <p>{{ review.text }}</p>
                </div>
            </div>
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
          books: [
            {
              image: require('../assets/book1.jpg'),
              alt: 'Книга 1',
              author: 'Ирина Витальевна',
              status: 'новичок',
              title: 'Марина Повалей "Сначала было похищение"',
              rating: '4/5',
              text: 'Отзыв о книге Марина Повалей "Сначала было похищение" ...'
            },
            {
              image: require('../assets/book2.jpg'),
              alt: 'Книга 2',
              author: 'Алексей Петров',
              status: 'новичок',
              title: 'Джордж Оруэлл "1984"',
              rating: '5/5',
              text: 'Отзыв о книге Джорджа Оруэлла "1984" ...'
            },
            // Дополнительные книги добавляются по аналогии...
          ],
          // Остальные категории рецензий также могут быть массивами
          experts: [
            {
              image: require('../assets/book1.jpg'),
              alt: 'Книга 3',
              author: 'ААА',
              status: 'эксперт',
              title: 'Марина Повалей "Сначала было похищение"',
              rating: '4/5',
              text: 'Отзыв о книге Марина Повалей "Сначала было похищение" ...'
            },
            {
              image: require('../assets/book2.jpg'),
              alt: 'Книга 2',
              author: 'Алексей Петров',
              status: 'эксперт',
              title: 'Джордж Оруэлл "1984"',
              rating: '5/5',
              text: 'Отзыв о книге Джорджа Оруэлла "1984" ...'
            },
        ],
          novelties: [
          {
              image: require('../assets/book1.jpg'),
              alt: 'Книга 1',
              author: 'ББББ',
              status: 'новичок',
              title: 'Марина Повалей "Сначала было похищение"',
              rating: '4/5',
              text: 'Отзыв о книге Марина Повалей "Сначала было похищение" ...'
            },
            {
              image: require('../assets/book1.jpg'),
              alt: 'Книга 2',
              author: 'Алексей Петров',
              status: 'любитель',
              title: 'Джордж Оруэлл "1984"',
              rating: '5/5',
              text: 'Отзыв о книге Джорджа Оруэлла "1984" ...'
            },
          ],
          critics:  [
          {
              image: require('../assets/book1.jpg'),
              alt: 'Книга 1',
              author: 'Ирина Витальевна',
              status: 'новичок',
              title: 'Марина Повалей "Сначала было похищение"',
              rating: '4/5',
              text: 'Отзыв о книге Марина Повалей "Сначала было похищение" ...'
            },
            {
              image: require('../assets/book1.jpg'),
              alt: 'Книга 2',
              author: 'Алексей Петров',
              status: 'любитель',
              title: 'Джордж Оруэлл "1984"',
              rating: '5/5',
              text: 'Отзыв о книге Джорджа Оруэлла "1984" ...'
            },
          ]
        },
        currentReviewIndex: 0,
        currentReviewCategory: 'books'
      };
    },
    computed: {
      currentReview() {
        return this.reviews[this.currentReviewCategory][this.currentReviewIndex];
      }
    },
    methods: {
        showReview(type) {
    this.currentReviewCategory = type;
    this.currentReviewIndex = 0;
  },
  showNextReview() {
    const reviewsLength = this.reviews[this.currentReviewCategory].length;
    if(this.currentReviewIndex < reviewsLength - 1) {
      ++this.currentReviewIndex;
    } else {
      this.currentReviewIndex = 0;
    }
  },
  showPreviousReview() {
    const reviewsLength = this.reviews[this.currentReviewCategory].length;
    if(this.currentReviewIndex > 0) {
      --this.currentReviewIndex;
    } else {
      this.currentReviewIndex = reviewsLength - 1;
    }
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

.review-card {
    background: #fff; /* Белый фон для карточки */
    border: 1px solid #ebebeb; /* Тонкая рамка вокруг карточки */
    padding: 16px; /* Отступ внутри карточки */
    margin: 10px; /* Расстояние между карточками */
    box-shadow: 5px 2px 4px rgba(0,0,0,0.1); /* Тень для объемности */
    border-radius: 10px; /* Скругление углов карточки */
    flex: 0 1 calc(33.333% - 20px); /* Флекс для размеров с маржином */
    display: flex;
    flex-direction: column; /* Вертикальное расположение контента */
    max-width: 350px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
}

img {
    height: 200px;
    width: 200px;
}

/* Заголовки */
h2 {
  margin: 0;
  padding-bottom: 10px; /* отступ снизу для заголовка */
  color: #333; /* темный текст */
}

.review-cards {
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
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
  