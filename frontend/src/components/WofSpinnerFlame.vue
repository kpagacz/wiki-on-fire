<template>
  <div class="spinner" :style="spinnerSize" v-if="loading">
    <div class="flame red"></div>
    <div class="flame orange"></div>
    <div class="flame yellow"></div>
    <div class="flame white"></div>
  </div>
</template>

<script>
export default {
  name: "WofSpinnerFlame",
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "primary",
    },
    size: {
      type: Number,
    },
  },
  computed: {
    spinnerSize() {
      return "width: " + this.size + "rem;";
    },
  },
};
</script>

<style lang="less">
@import "./common.less";

.spinner {
  display: flex;
  position: relative;
  max-width: 10rem;
  max-height: 10rem;
  z-index: 1;
  transform: rotate(-45deg);
  margin-left: 10%;
  font-size: 5rem;
}

.flame {
  aspect-ratio: 1;
  border-radius: 50% 0% 50% 50%;
  position: absolute;
  bottom: 0;
}

.white {
  background-color: hsl(1 1 1);
  width: 20%;
  margin: 0 0 9% 9%;
  box-shadow: 0px 0px 1em 0.5em hsla(0 100% 100% / 0.5);
}

.yellow {
  background-color: #fede17;
  width: 40%;
  margin: 0 0 6% 6%;
  box-shadow: 0px 0px 1rem 0.7rem hsla(60 100% 50% / 0.5);
}

.orange {
  background-color: #fb8b23;
  width: 60%;
  margin: 0 0 3% 3%;
  box-shadow: 0px 0px 1rem 0.7rem hsla(30 100% 50% / 0.5);
}

.red {
  background-color: #951313;
  width: 80%;
  box-shadow: 0px 0px 1rem 0.3rem hsla(0 50% 50% / 1);
}
</style>
