<template>
  <fieldset>
    <div class="store">
      <product-card
        v-for="product of products"
        :key="product.id"
        :item="product"
        :cart="cart"
        class="items"
        @on-add="addToCart"
        @on-remove="removeFromCart"
      />
    </div>
  </fieldset>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  components: { ProductCard },
  name: "Store",
  data() {
    return {
      products: [
        {
          id: 1,
          imageUrl: "https://tinyurl.com/4wr9szbn",
          name: "One Sauce. No Options.",
          description:
            "Mama Georgio will die of a broken heart if you do not eat her sauce.",
        },
        {
          id: 2,
          imageUrl: "https://tinyurl.com/a3nd866d",
          name: "The Only Noodles.",
          description:
            "Mama Georgio will turn off her hearing aid if you ask if these noodles are gluten-free.",
        },
      ],
      cart: [],
    };
  },
  methods: {
    hydrateCartFromStorage() {
      const existingCart = localStorage.getItem("cart");
      this.cart = existingCart ? JSON.parse(existingCart) : [];
    },
    saveToStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    addToCart(product) {
      this.cart = [...this.cart, product];
    },
    removeFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
    },
  },
  watch: {
    cart() {
      this.saveToStorage();
    },
  },
  mounted() {
    this.hydrateCartFromStorage();
  },
};
</script>

<style lang="scss">
@import "../scss/variables.scss";
@import "../scss/mixins.scss";
fieldset {
  // Styles carried over from App page
  // @include fieldsetStyle();
  .store {
    @include storeCart();
    h2,
    h3,
    h4 {
      @include defaultText();
    }
    h2 {
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-weight: 900;
    }
    .items {
      padding: 16px 8px;
      h3 {
        max-width: 400px;
        margin: $size1 auto;
        text-align: center;
      }
      img {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: $size1;
        margin: 0 auto;
        display: flex;
      }
      h4 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0 12px;
        margin-top: 8px;
        font-style: italic;
        font-weight: 900;
      }
      button {
        @include styleRemoval();
        @include buttonStyle();
        width: 45%;
        height: $size6;
        margin: 0px 10px;
        &:hover {
          cursor: pointer;
          background-color: lighten($background, 6%);
          transition: all 0.65s ease;
        }
      }
    }
    // .items:nth-child(3) > img {
    // transform: rotate(90deg);
    // max-height:400px;
    // height:100%;
    // width:auto;
    // max-width: 100%;
    // }
  }
}
// X-Small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  fieldset {
    .store {
      max-width: 250px;
      padding: 0 30px 15px;
      .items {
        padding: 15px 0;
        max-width: 250px;
        h3 {
          max-width: 300px;
          margin: 8px auto 16px;
        }
        img {
          max-width: 250px;
        }
        h4 {
          padding: 0;
          text-align: center;
          font-size: 15px;
        }
        button {
          width: auto;
          max-width: 100%;
          min-width: 250px;
          margin: 0 auto 10px;
          display: flex;
        }
      }
    }
  }
}
</style>