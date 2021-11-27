<template>
  <div v-if="loading" class="spinner" :style="spinnerStyle">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
/**
 * Three pulsating dots in a row indicating a process is taking place.
 * @displayName Dots Spinner
 * @example
 * <wof-spinner-dots :loading="true" />
 */
export default {
  name: "WofSpinnerDots",
  props: {
    /**
     * The boolean value indicating whether to show the spinner.
     * If `true` then shows the spinner; otherwise doesn't show.
     */
    loading: {
      type: Boolean,
      required: true,
    },
    /**
     * The height of the spinner div. Its width is 3.3 times larger than
     * the provided height.
     */
    size: {
      type: Number,
      default: 1
    }
  },
  computed: {
    /**
     * The computed property dynamically calculating the sizes of the spinner elements.
     * This allows the spinner to dynamically resize the shadows of the dots and the gap
     * between them.
     */
    spinnerStyle() {
      return "font-size: " + this.size + "rem;" +
      "height: " + this.size + "rem;" +
      "gap: " + this.size / 6 + "rem;";
    }
  }
}
</script>

<style lang="less" scoped>
@import './common.less';

.spinner {
  display: flex;
  margin: 0;
  aspect-ratio: 3.3 / 1;
  align-content: center;
  justify-content: center;
}
.spinner div {
  aspect-ratio: 1;
  border-radius: 50%;
  background: linear-gradient(to bottom right, @primary-accent-color -40%, white);
  box-shadow: 0.05em 0.05em 0.1em 0 hsl(0, 0%, 50%);
  width: 33%;
  animation: pulse 2s ease-in-out infinite;
}

.spinner :nth-child(1) {
  left: 0;
}

.spinner :nth-child(2) {
  left: 33%;
  animation-delay: 0.3s;
}

.spinner :nth-child(3) {
  left: 66%;
  animation-delay: 0.6s;
}

@keyframes pulse {
  0% {
    transform: scale(65%);
  }
  50% {
    transform: scale(100%);
  }
  100% {
    transform: scale(65%);
  }
}
</style>
