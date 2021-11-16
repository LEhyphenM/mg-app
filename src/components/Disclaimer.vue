<template>
  <div id="disclaimer">
    <h4>{{ disclaimer }}</h4>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      disclaimer: "The information contained on this website is for general information purposes only. " + 
      "Mama Georgio's Pasta for Friends is not a real company nor is the product and neither are available for purchase. " +
      "'Mama Georgio' is not a real person and is not based on anyone living or dead. " + 
      "The product/concept of this site is purely for an e-commerce website example & intended for educational purposes. " + 
      "'Mama Georgio's Pasta for Friends' originates from the 'FreeBeer & HotWings' show (broadcasts out of Grand Rapids, MI) " +
      "that aired on 04/21/2020. Much appreciation goes to them for being the muse for this sample e-commerce site. " +
      "It is highly recommended to check out the show if you have not listened to it upon the time of reading this."
    }
  },
}
</script>

<style lang="scss">
  @import "../scss/variables.scss";
  @import "../scss/mixins.scss";
  #disclaimer {
    width:100%;
    display:flex;
    flex-direction:row;
    background-color:$white;
    h4 {
      max-width:600px;
      font-size:$size2;
      font-weight:500;
      text-transform:uppercase;
      margin:0 auto;
      padding:40px;
    }
  }
  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    #disclaimer {
      h4 {
        max-width:80%;
        text-align:center;
      }
    }

  }
</style>