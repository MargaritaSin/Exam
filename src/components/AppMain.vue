<template>
  <swiper class="mySwiper">
    <swiper-slide><img src="../assets/slide2.jpg" alt="Image 1"></swiper-slide>
    <swiper-slide><img src="../assets/slide1.jpg" alt="Image 2"></swiper-slide>
    <swiper-slide><img src="../assets/slide3.jpg" alt="Image 3"></swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import './swiperStyle.css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {};
    },
  };
</script>

  
  <style>

  </style>