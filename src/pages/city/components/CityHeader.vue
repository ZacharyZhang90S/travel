<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.header {
  positon: relative;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
  overflow: hidden;

  .header-back {
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>