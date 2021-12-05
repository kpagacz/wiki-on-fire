<template>
  <div class="optional">
      <div class="optional__content" v-if="isContentVisible">
        <slot></slot>
      </div>
    <div class="optional__button-bar">
      <div class="optional__toggle-button">
        <wof-icon :icon="toggleIcon" :size="2" @click="toggleContent"></wof-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WofOptionalSection",
  data() {
    return {
      isContentVisible: true
    };
  },
  methods: {
    toggleContent() {
      this.isContentVisible = !this.isContentVisible;
    }
  },
  computed: {
    toggleIcon() {
      if(this.isContentVisible) {
        return 'wof-up';
      }
      return 'wof-down';
    }
  }
};
</script>

<style lang="less">
@import "./common.less";

.optional {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .optional__content {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
    background-color: @secondary-color;
  }

  .optional__button-bar {
      display: flex;
      justify-content: center;
      background-color: @secondary-color;
      width: 100%;
      height: 22px;

    .optional__toggle-button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      padding: 7px;
      background-color: @primary-accent-color;
      color: @primary-bright-text-color;
    }
  }
}
</style>