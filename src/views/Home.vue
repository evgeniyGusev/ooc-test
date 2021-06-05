<template>
  <default-layout>
    <slider-block />
    <to-shop-block />
  </default-layout>
</template>

<script>
  import SliderBlock from '@/components/HomePage/SliderBlock';
  import ToShopBlock from "@/components/HomePage/ToShopBlock";

  export default {
    name: 'App',
    components: { ToShopBlock, SliderBlock },
  }
</script>

<style lang="scss">
.main {
  padding-top: 50px;
  background: #F6F6F6;
}
</style>
