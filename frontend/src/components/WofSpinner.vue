<template>
<div class = "spinner">
  <div class = "flame red"></div>
  <div class = "flame orange"></div>
  <div class = "flame yellow"></div>
  <div class = "flame white"></div>
</div>
</template>

<script>
export default {
  name: "WofSpinner",
  props: {
    loading: {
      type: Boolean,
      default: true,
      required: true
    },
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: Number
    }
  }
};
</script>

<style lang="less">
@import './common.less';

.spinner {
  display: flex;
  position: relative;
  max-width: 10rem;
  max-height: 10rem;
  z-index: 1;
  transform: rotate(-45deg);
  margin-left: 10%;
}

.flame {
  aspect-ratio: 1;
  border-radius: 50% 0% 50% 50%;
  position: absolute;
  bottom: 0;
}

.white {
  background-color: white;
  width: 20%;
  margin: 0 0 9% 9%;
}

.yellow {
  background-color: #FEDE17;
  width: 40%;
  margin: 0 0 6% 6%;
}

.orange {
  background-color: #fb8b23;
  width: 60%;
  margin: 0 0 3% 3%;
}

.red {
  background-color: #951313;
  width: 80%;
}


</style>
