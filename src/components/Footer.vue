<template>
  <div id="footer">
    <h6>{{ footer }}</h6>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footer: "Lauren Elliott-Manheim • 2015-2022 • Ex astris, scientia"
    }
  },
}
</script>
<style lang="scss">
  @import "../scss/variables.scss";
  @import "../scss/mixins.scss";
  #footer h6 {
    @include defaultText();
    color:$accent;
    font-weight:400;
    letter-spacing:2.25px;
    text-transform:uppercase;
    padding:32px 0;
    text-align:center;
    margin:0 auto;
    width: 100%;
  }
  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    #footer h6 {
      width:100%;
      max-width:300px;
      // padding:32px 0;
    }
  }
</style>