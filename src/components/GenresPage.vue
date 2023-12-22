<template>
    <div class="genres-page">
      <h1>Жанры</h1>
      <ul class="genre-categories">
        <li v-for="(genre, index) in genres" :key="index">
          <h2>{{ genre.name }}</h2>
          <ul class="sub-genres">
            <li v-for="(subGenre, subIndex) in genre.subGenres" :key="subIndex">
              <a :href="subGenre.link">{{ subGenre.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GenresPage',
  
    data() {
      return {
        genres: [
          {
            name: 'Фантастика',
            subGenres: [
              { name: 'Зарубежная фантастика', link: '#' },
              { name: 'Русская фантастика', link: '#' },
              { name: 'Детская фантастика', link: '#' },
            ]
          },
          {
            name: 'Детективы',
            subGenres: [
              { name: 'Полицейские детективы', link: '#' },
              { name: 'Психологические детективы', link: '#' },
              { name: 'Исторические детективы', link: '#' },
            ]
          },
          {
            name: 'Романтика',
            subGenres: [
              { name: 'Языковые романтические рассказы', link: '#' },
              { name: 'Исторические романтические рассказы', link: '#' },
              { name: 'Современная романтика', link: '#' },
            ]
          },
        ]
      };
    },
  };
  </script>
  
  <style scoped>
.genres-page {
  text-align: center;
  color: #ff8c00; /* Оранжевый цвет для выделения заголовка */
  margin-bottom: 2rem;
}

.genre-categories {
  list-style: none;
  padding: 0;
}

.genre-categories > li{
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

.sub-genres {
    list-style: none;
  padding-left: 1rem;
  text-align: start;
  font-size: 20px;
  margin-left: 1rem;
}

.sub-genres li a {
  text-decoration: none;
  color: #000; /* Черный цвет для обычного текста */
  transition: transform 0.3s ease, color 0.3s ease;
}

.sub-genres li a:hover {
  transform: translateX(10px);
  color: #ff8c00; /* Оранжевый цвет и смещение для элементов при наведении */
}
  </style>
  
  