<template>
    <div class="book">
    <img :src="require(`@/assets/${book.cover}`)" :alt="`Книга ${book.title}`">
      <div class="book-details">
        <h3>{{ book.title }}</h3>
        <p>Автор: {{ book.author }}</p>
        <p>Жанр: {{ book.genre }}</p>
        <p>Описание книги: {{ book.description }}</p>
        <button>Прочесть</button>
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
  max-width: 200px; /* Чтобы изображения были адаптивными */
  border-radius: 4px; /* Скругление углов изображения */
  max-height: 250px;
  min-height: 220px;
}

.book-details {
  flex: 1; /* Заставляет блок описания растягиваться */
  padding-top: 8px; /* Отступ сверху для контента описания */
  display: flex;
  align-items: center;
  flex-direction: column;
}

.book-details h3 {
  color: #f60; /* Оранжевый цвет для названия книги */
  margin: 10px 0; /* Отступы для названия книги */
}

button {
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
</style>
