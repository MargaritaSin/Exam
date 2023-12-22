<template>
    <div class="book">
    <img :src="require(`@/assets/${book.cover}`)" :alt="`Книга ${book.title}`">
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
};
  </script>

<style scoped>
/* Стили для каждой карточки книги */
.book {
  background: #fff; /* Белый фон для карточки */
  border: 1px solid #ebebeb; /* Тонкая рамка вокруг карточки */
  padding: 16px; /* Отступ внутри карточки */
  margin: 10px; /* Расстояние между карточками */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Тень для объемности */
  border-radius: 4px; /* Скругление углов карточки */
  flex: 0 1 calc(33.333% - 20px); /* Флекс для размеров с маржином */
  display: flex;
  flex-direction: column; /* Вертикальное расположение контента */
  max-width: 350px;
}

img {
  max-width: 200px; /* Чтобы изображения были адаптивными */
  border-radius: 4px; /* Скругление углов изображения */
  max-height: 250px;
}

.book-details {
  flex: 1; /* Заставляет блок описания растягиваться */
  padding-top: 8px; /* Отступ сверху для контента описания */
}

.book-details h3 {
  color: #f60; /* Оранжевый цвет для названия книги */
  margin: 10px 0; /* Отступы для названия книги */
}
</style>
