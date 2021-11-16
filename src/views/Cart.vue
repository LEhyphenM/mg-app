<template>
  <fieldset>
    <div class="cart">
      <h2> {{ cartTitle }} </h2>
      <div v-for="(c, index) of cart" :key="c.id" class="items">
        <h3>{{ c.name }}</h3>
        <img :src="c.imageUrl" class="cartItems" />
        <button @click="removeFromCart(index)">{{ removeBtn }}</button>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cartTitle: "Shopping Cart",
      cart: [],
      removeBtn: "remove from cart",
    };
  },
  methods: {
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ id }) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    getCart() {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
  beforeMount() {
    this.getCart();
  },
};
</script>

<style lang="scss">
  @import "../scss/variables.scss";
  @import "../scss/mixins.scss";
  fieldset {
    // Styles carried over from App page
    // @include fieldsetStyle();
    .cart {
      @include storeCart();
      padding: 0 30px 15px;
        h2, h3, h4 {
          @include defaultText();
        }
        h2 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          font-weight:900;
          margin:10px auto 0;
          padding-bottom:0;
        }
      .items {
        padding: 16px 8px;
        h3 {
          max-width: 400px;
          margin: $size1 auto;
          text-align: center;
        }
        img.cartItems {
          width:100%;
          max-width:400px;
          height:auto;
          border-radius:$size1;
          margin:0 auto;
          display: flex;
        }
        button {
          @include styleRemoval();
          @include buttonStyle();
          background-color:$accent;
          width:45%;
          height:$size6;
          margin: 18px auto 0;
          display:flex;
          &:hover {
            cursor:pointer;
            background-color: lighten($accent, 8%);
            transition: all 0.65s ease;
          }
        }
      }
    }
  }
  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    fieldset {
      .cart {
        max-width: 250px;
        .items {
          padding:8px 0px 16px;
          h3 {
            max-width:300px;
          }
          img {
            min-width:250px;
          }
          button{
            width:auto;
            min-width:250px;
            max-width:100%;
          }
        }
      }
    }
  }
</style>