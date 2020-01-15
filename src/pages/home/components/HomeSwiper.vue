<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1811/ef/369c6624b313de02.jpg_890x330_800c8f55.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/fef4fef657f11d49ce6578a961e605e3.png_890x330_8899daa6.png"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: red !important;
}

.swiper-img {
  width: 100%;
}
</style>