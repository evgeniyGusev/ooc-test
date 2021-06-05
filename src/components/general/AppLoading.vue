<template>
  <div id="spinningSquaresG">
    <div id="spinningSquaresG_1" class="spinningSquaresG"></div>
    <div id="spinningSquaresG_2" class="spinningSquaresG"></div>
    <div id="spinningSquaresG_3" class="spinningSquaresG"></div>
    <div id="spinningSquaresG_4" class="spinningSquaresG"></div>
    <div id="spinningSquaresG_5" class="spinningSquaresG"></div>
    <div id="spinningSquaresG_6" class="spinningSquaresG"></div>
    <div id="spinningSquaresG_7" class="spinningSquaresG"></div>
    <div id="spinningSquaresG_8" class="spinningSquaresG"></div>
  </div>
</template>

<script>
export default {
  name: 'AppLoading',
};
</script>

<style lang="scss" scoped>
#spinningSquaresG{
  position: relative;
  width: 100%;
  height: 28px;
  margin-bottom: 30px;
}

.spinningSquaresG{
  position: absolute;
  top: 0;
  width: 28px;
  height: 28px;
  animation-name: bounce_spinningSquaresG;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  transform: scale(.3);
}

#spinningSquaresG_1{
  left: 0;
  animation-delay: 0.6s;
}

#spinningSquaresG_2{
  left: 29px;
  animation-delay: 0.75s;
}

#spinningSquaresG_3{
  left: 58px;
  animation-delay: 0.9s;
}

#spinningSquaresG_4{
  left: 88px;
  animation-delay: 1.05s;
}

#spinningSquaresG_5{
  left: 117px;
  animation-delay: 1.2s;
}

#spinningSquaresG_6{
  left: 146px;
  animation-delay: 1.35s;
}

#spinningSquaresG_7{
  left: 175px;
  animation-delay: 1.5s;
}

#spinningSquaresG_8{
  left: 205px;
  animation-delay: 1.64s;
}



@keyframes bounce_spinningSquaresG{
  0%{
    transform: scale(1);
    background-color: #7DB945;
  }

  100%{
    transform: scale(.3) rotate(90deg);
    background-color: #fff;
  }
}
</style>
