<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="//s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
       <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="//s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>   <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="//s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>   <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="//s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>   <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="//s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>   <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="//s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>   <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="//s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>   <div class="icon">
      <div class="icon-img">
        <img
          class="icon-img-content"
          src="//s.qunarzz.com/homenode/images/touchheader/piao.png"
          alt
        />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIcons"
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.icons {
  height: 0;
  padding-bottom: 50%;
  outline : 1px solid red;

  .icon {
    float: left;
    padding-bottom: 25%;
    width: 25%;
    position: relative;
    overflow: hidden;
    outline : 1px solid black;

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
}
</style>