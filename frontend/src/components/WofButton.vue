<template>
  <button :class="`button button--${variant}`" :style="`font-size: ${this.size}rem;`">
    <wof-icon v-if="this.icon" :icon="this.icon" :size="this.size" :class="this.getIconCss" />
    <slot/>
  </button>
</template>

<script>
export default {
  name: "WofButton",

  props: {
    variant: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "positive", "warning", "error", "disabled", "outline"].includes(value)
      }
    },
    size: {
      type: Number,
      required: false,
      default: null
    },
    icon: {
      type: String,
      required: false
    }
  },
  computed: {
    getIconCss: function() {
      return this.$slots.default ? "button__icon" : "";
    }
  }
}
</script>

<style lang="less">
@import './common.less';

.button {
  border: 1px solid transparent;
  height: min-content;
  text-align: center;
  align-items: center;
  display: flex;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: @primary-bright-text-color;
  font-weight: 600;
  &:active {
    color: @primary-dark-text-color;
  }
  &__icon {
    margin-right: 0.5rem;
  }
  &--default {
    background-color: @primary-accent-color;
    &:hover, &:focus-visible {
      background-color: @secondary-accent-color;
    }
  }

  &--positive {
    background-color: @primary-positive-color;
    &:hover, &:focus-visible {
      background-color: @secondary-positive-color;
    }
  }

  &--warning {
    background-color: @primary-warning-color;
    &:hover, &:focus-visible {
      background-color: @secondary-warning-color;
    }
  }

  &--error {
    background-color: @primary-error-color;
    &:hover, &:focus-visible {
      background-color: @secondary-error-color;
    }
  }

  &--outline {
    color: black;
    background-color: transparent;
    border-color: @primary-dark-text-color;
    &:hover, &:focus-visible {
      background-color: fade(@primary-neutral-color, 30);
      border-color: transparent;
    }
    &:active {
      border-color: @primary-dark-text-color;
      padding: 0.5rem 1rem;
    }
  }

  &--disabled {
    background-color: @primary-neutral-color;
    color: @secondary-neutral-color;
    &:active {
      color: @secondary-neutral-color;
    }
  }
}
</style>
