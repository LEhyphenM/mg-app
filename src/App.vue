<template>
  <div class="app">
    <!-- <img :src="`${coverUrl}`" class="cover" />  -->
    <!-- <img :src="`${backgroundUrl}`" class="cover" :style="{ backgroundImage: `${backgroundUrl}` }" /> -->
    <Header />
    <Nav />
    <router-view/>
    <!-- <Home /> -->
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Footer from './components/Footer.vue';
export default {
  name: "App",
  components: {
    Header,
    Nav,
    Footer,
  },
  views: {
    // About, 
    // Cart,
    // Home, 
    // Store,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
  @import "./scss/variables.scss";
  @import "./scss/mixins.scss";
  body {
    @include defaultText();
    margin: 0;
    padding: 0;
    background-color:$background;
    #app {
      // max-width:500px;
      // max-width: 100%;
      // margin:0px auto;
      // padding:20px;
      // background-image:url(https://tinyurl.com/d93akmkx);
      // background-position-y:-100px;
      // background-position-x: center;
      // background-size:cover;
      // background-repeat:no-repeat;
      // height:auto;
      // max-height:100%;
      // min-height:654px;
      .app {
        padding:20px;
    //   background-image:url(https://tinyurl.com/d93akmkx);
    //   background-position-y:-100px;
    //   background-position-x: center;
    //   background-size:cover;
    //   background-repeat:no-repeat;
    //   height:auto;
    //   max-height:100%;
    //   min-height:654px;
      }
    }
    fieldset {
      @include fieldsetStyle();
    }
  }
  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    body #app {
      max-width:400px;
      fieldset {
        max-width:300px;
        padding:15px 0;
      }
    }
  }
</style>