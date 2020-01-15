<template>
  <div class="HomeRecommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom">
        <img
          src="https://imgs.qunarzz.com/sight/p0/1911/29/29d9b9078000774fa3.img.jpg_224x148_dc788e16.jpg"
          alt
          class="item-img"
        />
        <div class="item-info">
          <p class="item-title">京城溜娃必去</p>
          <p class="item-desc">这些地方该去看看…</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend"
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.title {
  background-color: #eee;
  line-height: 0.8rem;
  padding-left:0.2rem;
  margin-top: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;
  padding: 0.1rem;

  .item-img {
    height: 1.7rem;
  }

  .item-info {
    flex: 1;
    padding-left: 0.2rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
    }

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background-color: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>

