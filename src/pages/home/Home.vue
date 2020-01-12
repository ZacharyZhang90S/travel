<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    test
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeSwiper from "./components/HomeSwiper";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style scoped>
</style>
