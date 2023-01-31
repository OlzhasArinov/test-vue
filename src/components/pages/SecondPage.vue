<template>
  <Header />
  <Promo />
  <Story />
  <Products />
  <Blog />
  <Companies />
  <Footer />
</template>

<script>
import Blog from '../secondPage/Blog.vue';
import Companies from '../secondPage/Companies.vue';
import Footer from '../secondPage/Footer.vue';
import Header from '../secondPage/Header.vue';
import Products from '../secondPage/Products.vue';
import Promo from '../secondPage/Promo.vue';
import Story from '../secondPage/Story.vue';

  export default {
    components: {
      Header,
      Promo,
      Story,
      Products,
      Blog,
      Companies,
      Footer
    }
  }
</script>

<style>

</style>