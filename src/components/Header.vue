<template>
  <div id="header">
    <h1>{{ header }}</h1>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        header: "Mama Georgio's Pasta for Friends",
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "../scss/variables.scss";
  @import "../scss/mixins.scss";
  #header {
    // height:60px;
    margin-top:30px;
    h1 {
      @include defaultText();
      color: #F0F2F2;
      // color:$background;
      text-shadow: $highlight 1px 2px 7px;
      font-weight: bold;
      font-size: 28px;
      text-align: center;
      margin-bottom:$size3;
    }
  }
</style>