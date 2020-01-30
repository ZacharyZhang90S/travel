<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :letter="letter"></city-list>
    <city-alphabet @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/CityHeader";
import CitySearch from "./components/CitySearch";
import CityList from "./components/CityList";
import CityAlphabet from "./components/CityAlphabet";
export default {
  name: "city",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data: function() {
    return {
      letter: ""
    };
  },
  methods: {
    handleLetterChange(letter) {
      this.letter = letter;
    }
  }
};
</script>

<style lang="stylus" scoped></style>