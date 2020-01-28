<template>
  <div class="header">
    <div class="header-left iconfont">
      <div class="back-icon">&#xe624;</div>
    </div>
    <div class="header-input iconfont">
      <span class="arrow-icon">&#xe632;</span> 输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right iconfont">
        城市
        <span>&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomneHeader",
  data: function() {
    return {
      msg: "this is header"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      font-size: 0.4rem;
      text-align: center;
    }
  }

  .header-input {
    flex: 1;
    line-height: 0.64rem;
    height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background: #ffffff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #ffffff;

    .arrow-icon {
      font-size: 0.24rem;
      margin-left: 0.04rem;
    }
  }
}
</style>

