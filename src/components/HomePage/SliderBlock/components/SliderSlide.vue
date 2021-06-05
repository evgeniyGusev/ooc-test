<template>
  <div class="slider-slide">
    <div class="image">
      <div class="number">
        {{ id }}
      </div>
      <picture>
        <source :srcset="`${image['1x']}, ${image['2x']} 2x`">
        <img :src="image['1x']" :alt="title">
      </picture>
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderSlide',

  props: {
    id: {
      type: [Number, String],
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      default: () => ({}),
    }
  }
};
</script>

<style lang="scss" scoped>
.slider-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 640px;
  padding: 40px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;

  .image {
    position: relative;
    width: 100%;
    margin-bottom: 28px;

    img {
      width: 100%;
      object-fit: cover;
    }

    .number {
      position: absolute;
      top: -10px;
      left: -10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 22px;
      line-height: 46px;
      font-weight: 700;
      text-align: center;
      color: #7DB945;
      background: #fff;
    }
  }

  .title,
  .description {
    font-size: 16px;
    line-height: 24px;
    font-weight:700;
    text-align: center;
  }

  .description {
    font-weight: 400;
  }
}

@media (max-width: 425px) {
  .slider-slide {
    padding: 20px;

    .image {
      margin-bottom: 20px;

      img {
        height: 160px;
      }

      .number {
        top: -5px;
        left: -5px;
        width: 40px;
        height: 40px;
        font-size: 16px;
      }
    }

    .title,
    .description {
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
