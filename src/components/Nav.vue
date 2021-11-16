<template>
  <div id="nav">
    <button><router-link to="/">{{ link1 }}</router-link></button>
    <button><router-link to="/store">{{ link2 }}</router-link></button> 
    <button><router-link to="/cart" class="link3">{{ link3 }}</router-link></button>
    <!-- <router-link to="/about">About</router-link> -->
  </div>
</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        link1: "Home",
        link2: "Store",
        link3: "Cart",
      }
    },
  }
</script>

<style lang="scss">
  @import "../scss/variables.scss";
  @import "../scss/mixins.scss";
  #nav {
    display:flex;
    flex-direction: row;
    width: 100%;
    padding:0px;
    justify-content:space-evenly;
    margin:0 auto 30px;
    max-width: 350px;
    button {
      @include styleRemoval();
      @include buttonStyle();
      text-transform: lowercase;
      height:36px;
      width:30%;
      a {
        // color:#F0F2F2;
        color:$accent;
        text-decoration: none;
        padding:7px 30px;
        border-radius: $size1;
        &:active, &:focus {
          background-color:$accent;
          color:#F0F2F2;
          // border-radius:$size1;
          // padding:7px 30px;
          transition: all 0.08s ease;
        }
        // &:hover {
        //   color:#F0F2F2;
        // }
        // &.router-link-exact-active,
        // &:active {
        // }
      }
      a.link3 {
        padding:7px 36px;
      }
    }
  }

  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    #nav {
      max-width:320px;
    }
  }
</style>