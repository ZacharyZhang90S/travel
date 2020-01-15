<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./pages/home/Home";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
* {
  margin:0;
	padding:0;
  box-sizing: border-box;
}
html{
  font-size: 50px;
}
ul,ol{
  list-style-type: none;
}
</style>
