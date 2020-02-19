<template>
  <ul class="list">
    <li class="item" @click="handleLetterClick">A</li>
    <li class="item" @click="handleLetterClick">B</li>
    <li class="item" @click="handleLetterClick">C</li>
    <li class="item" @click="handleLetterClick">D</li>
    <li class="item" @click="handleLetterClick">E</li>
    <li class="item" @click="handleLetterClick">F</li>
    <li class="item" @click="handleLetterClick">G</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  data() {
    return {
      touchStatus: false
    };
  },
  methods: {
    handleLetterClick(e) {
      let letter = e.target.innerText;
      this.$emit("change", letter);
    }
    //滑动事件无法生效bug
    // handleTouchStart() {
    //   this.touchStatus = true;
    //   window.console.log(1);
    // },
    // handleTouchMove(e) {
    //   window.console.log(1);
    //   if (this.touchStatus) {
    //     const startY = this.$refs["A"].offsetTop;
    //     const touchY = e.touch[0].clientY - 79;
    //     const index = Math.floor((touchY - startY) / 20);
    //     window.console.log(startY);
    //     window.console.log(touchY);
    //     window.console.log(index);
    //     if (index >= 0 && index < this.letters.length) {
    //       this.$emit("change", this.letters[index]);
    //     }
    //   }
    // },
    // handleTouchEnd() {
    //   window.console.log(1);
    //   this.touchStatus = false;
    // }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.44rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>