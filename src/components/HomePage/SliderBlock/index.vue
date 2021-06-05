<template>
  <section class="slider-block">
    <app-container>
      <div class="title">
        Взгляните на процесс сборки своими глазами
      </div>
      <div class="slider">
        <button class="slider-arrow-prev arrow-desk" @click="changeSlidePrev"/>
        <template v-for="(slide, i) in slides">
          <slider-slide
              :key="i"
              v-show="slide.id === currentSlide"
              v-bind="slide"
          />
        </template>
        <button class="slider-arrow-next arrow-desk" @click="changeSlideNext"/>

        <div class="slider-buttons">
          <button class="slider-arrow-prev" @click="changeSlidePrev"/>
          <button class="slider-arrow-next" @click="changeSlideNext"/>
        </div>
      </div>
    </app-container>
  </section>
</template>

<script>
import SliderSlide from '@/components/HomePage/SliderBlock/components/SliderSlide';
import SLIDES from '@/assets/mock/SLIDES.json';

export default {
  name: 'SliderBlock',

  components: { SliderSlide },

  data() {
    return {
      currentSlide: 1,
    }
  },

  computed: {
    slides() {
      return SLIDES;
    },
  },

  methods: {
    changeSlideNext() {
      if (this.currentSlide < this.slides.length) {
        this.currentSlide++;
      } else if (this.currentSlide === this.slides.length) {
        this.currentSlide = 1;
      }
    },
    changeSlidePrev() {
      if (this.currentSlide > 1) {
        this.currentSlide--;
      } else if (this.currentSlide === 1) {
        this.currentSlide = this.slides.length;
      }},
  },
};
</script>

<style lang="scss" scoped>
.slider-block {
  .title {
    font-size: 36px;
    line-height: 46px;
    font-weight: bold;
    max-width: 610px;
    margin: 0 auto 29px;
    text-align: center;
  }

  .slider {
    display: flex;
    justify-content: center;
    align-items: center;

    .slider-arrow-prev,
    .slider-arrow-next {
      width: 40px;
      height: 40px;
      background: url("/media/svg/slider-arrow.svg") center no-repeat;
      transition: transform .2s;

      &:hover {
        transform: scale(1.2);
      }
    }

    .slider-arrow-next {
      transform: rotate(180deg);

      &:hover {
        transform: rotate(180deg) scale(1.2);
      }
    }

    .slider-buttons {
      display: none;
    }

    .slider-slide {
      min-height: 467px;
      margin: 0 20px;
    }
  }
}

@media (max-width: 767px) {
  .slider-block {
    .slider {
      flex-direction: column;

      .arrow-desk {
        display: none;
      }

      .slider-buttons {
        display: flex;
        justify-content: center;
        margin-top: 33px;

        .slider-arrow-prev {
          margin-right: 60px;
        }
      }

      .slider-slide {
        min-height: 350px;
        margin: 0;
      }
    }
  }
}
</style>
