<template>
  <div class="to-shop-block">
    <button
      class="app-button"
      @click="openModalHandler"
    >
      К покупкам
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: 'ToShopBlock',

  methods: {
    ...mapMutations({
      setModal: 'SET_MODAL',
    }),

    openModalHandler() {
      this.setModal('send-request');
      document.body.style.overflow = 'hidden';
    },
  },
};
</script>

<style lang="scss" scoped>
.to-shop-block {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding: 50px 0;
  background: #fff;
}

@media (max-width: 767px) {
  .to-shop-block {
    margin-top: 50px;
  }
}
</style>
