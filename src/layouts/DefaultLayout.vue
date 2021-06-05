<template>
  <div class="default-layout">
    <the-header />
    <main class="main">
      <slot />
    </main>
    <the-footer />

    <transition name="fade">
      <component :is="getModalComponent" />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheHeader from '@/layouts/components/defaultLayout/TheHeader';
import TheFooter from '@/layouts/components/defaultLayout/TheFooter';
import SendRequestModal from "@/components/modals/SendRequestModal";

export default {
  name: 'DefaultLayout',
  components: { TheHeader, TheFooter, SendRequestModal },

  computed: {
    ...mapState({
      modalType: (state) => state.modals.modal,
    }),

    getModalComponent() {
      switch (this.modalType) {
        case 'send-request':
          return 'SendRequestModal';
          break;
        default:
          return '';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
