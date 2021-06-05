<template>
  <div class="send-request-modal" @click="closeModalOutSide($event)">
    <div class="modal">
      <div class="close" @click="closeModal">
        +
      </div>
      <div class="title">
        {{ formSent ? 'Форма отправлена!' : 'Форма отправки' }}
      </div>

      <div v-if="!formSent && !formSending" class="input-wrapper">
        <transition name="error">
          <div v-show="error" class="error">
            {{ error }}
          </div>
        </transition>
        <input
          type="text"
          :class="['input', {'error-state': error}]"
          v-model="mail"
          placeholder="Введите адрес почты"
          @focus="error = ''"
        />
      </div>

      <app-loading v-if="formSending" />

      <button
        v-if="!formSent"
        class="app-button"
        :disabled="formSending"
        @click="submit"
      >
        {{ formSending ? 'Отправка...' : 'Отправить' }}
      </button>

      <div v-if="formSent" class="thank-message">
        Спасибо!
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: 'SendRequestModal',

  data() {
    return {
      mail: '',
      error: '',
    }
  },

  computed: {
    ...mapState({
      formSending: (state) => state.sendRequest.isSending,
      formSent: (state) => state.sendRequest.isSent,
    }),
  },

  methods: {
    ...mapMutations({
      setModal: 'SET_MODAL',
      setSentStatus: 'SET_SENT_STATUS',
    }),
    ...mapActions({
      sendForm: 'sendRequest',
    }),

    submit() {
      if (this.mail) {
        if (this.validEmail(this.mail)) {
          this.sendForm();
          console.log(this.mail);
        } else {
          this.error = 'Укажите корректный адрес';
        }
      } else {
        this.error = 'Обязательное поле';
      }
    },

    closeModal() {
      this.setModal('');

      if(this.formSent) this.setSentStatus(false);

      document.body.style.overflow = 'initial';
    },

    closeModalOutSide({ target: { className } }) {
      if (className === 'send-request-modal') this.closeModal();
    },

    validEmail(email) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email);
    }
  }
};
</script>

<style lang="scss" scoped>
.send-request-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .5);

  .modal {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 380px;
    padding: 40px 20px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background: #fff;

    .close {
      position: absolute;
      top: 0;
      right: 10px;
      padding: 5px;
      font-size: 42px;
      transform: rotate(45deg);
      cursor: pointer;
    }

    .title,
    .thank-message {
      font-size: 22px;
      line-height: 24px;
      font-weight: 700;
      text-align: center;
    }

    .title {
      margin-bottom: 30px;
    }

    .thank-message {
      color: forestgreen;
    }

    .input-wrapper {
      position: relative;

      .error {
        position: absolute;
        top: -20px;
        left: 0;
        font-size: 14px;
        color: firebrick;
      }

      .input {
        width: 100%;
        margin-bottom: 20px;
        padding: 15px 10px;
        border: 1px solid #444;
        border-radius: 10px;

        &.error-state {
          border-color: firebrick;

          &::placeholder {
            color: firebrick;
          }
        }
      }
    }
  }
}

@media (max-width: 425px) {
  .send-request-modal {
    .modal {
      min-width: initial;
      width: calc(100% - 20px);

      .app-button {
        width: 100%;
      }
    }
  }
}

.error-enter-active, .error-leave-active {
  transition: all .25s;
}
.error-enter, .error-leave-to {
  opacity: 0;
  top: 10px;
}
</style>
