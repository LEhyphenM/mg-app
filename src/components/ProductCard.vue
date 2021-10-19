<template>
  <div>
    <h3>{{ item.name }}</h3>
    <img :src="item.imageUrl" />
    <h4>{{ item.description }}</h4>
    <button v-text="buttonText" @click="handleProductClick" />
    <button @click="handleCartClick">check out</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    item: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    cart: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  methods: {
    handleProductClick() {
      const action = this.isInCart ? "on-remove" : "on-add";
      this.$emit(action, this.item);
    },
    handleCartClick() {
      this.$router.push("/cart");
    },
  },
  computed: {
    isInCart() {
      return this.cart.some((item) => item.id === this.item.id);
    },
    buttonText() {
      return this.isInCart ? "remove from cart" : "add to cart";
    },
  },
};
</script>