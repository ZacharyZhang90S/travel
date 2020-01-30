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
   methods : {
    handleLetterClick(e) {
        this.$emit("change",e.target.innerText )
    }
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