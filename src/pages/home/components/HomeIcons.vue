<template>
  <div class="icons">
    <swiper class="swiper-container">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png"
        },
        {
          id: "0002",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png"
        },
        {
          id: "0003",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png"
        },
        {
          id: "0004",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png"
        },
        {
          id: "0005",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png"
        },
        {
          id: "0006",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png"
        },
        {
          id: "0007",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png"
        },
        {
          id: "0008",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png"
        },
        {
          id: "0009",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png"
        },
        {
          id: "00010",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png"
        },
        {
          id: "00011",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png"
        },
        {
          id: "00012",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png"
        },
        {
          id: "00013",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png"
        },
        {
          id: "00014",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png"
        },
        {
          id: "00015",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png"
        },
        {
          id: "00016",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
  outline: 1px solid red;
}

.icon {
  float: left;
  padding-bottom: 25%;
  width: 25%;
  position: relative;

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    padding: 0.1rem;

    .icon-img-content {
      height: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  .icon-desc {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    color: $darkTextColor;
  }
}
</style>