<template>
  <button :class="`button button--${type}`" :style="`font-size: ${this.size}rem;`" @click="onClick()">
<<<<<<< HEAD
    <wof-icon v-if="this.icon" :icon="this.icon" :size="this.size" class="button--icon" />
=======
    <wof-icon v-if="this.icon" :icon="this.icon" :size="this.size" :class="this.getIconCss" />
>>>>>>> origin/devel
    <slot/>
  </button>
</template>

<script>
export default {
  name: "WofButton",

  props: {
    type: {
      type: String,
<<<<<<< HEAD
      required: true,
=======
>>>>>>> origin/devel
      default: "default",
      validator(value) {
        return ["default", "positive", "warning", "error", "disabled"].includes(value)
      }
    },
    size: {
      type: Number,
      required: false,
      default: 1
    },
    icon: {
      type: String,
      required: false
    }
  },
  methods: {
    onClick: function(event) {
      this.$emit("click", event)
    }
<<<<<<< HEAD
=======
  },
  computed: {
    getIconCss: function() {
      return this.$slots.default ? "button__icon" : "";
    }
>>>>>>> origin/devel
  }
}
</script>

<style lang="less">
@import './common.less';

.button {
  border: none;
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
<<<<<<< HEAD
  &--icon {
    margin-right: 0.7rem;
=======
  &__icon {
    margin-right: 0.5rem;
>>>>>>> origin/devel
  }
  &--default {
    background-color: @primary-accent-color;
    &:hover {
      background-color: @secondary-accent-color;
    }
  }

  &--positive {
    background-color: @primary-positive-color;
    &:hover {
      background-color: @secondary-positive-color;
    }
  }

  &--warning {
    background-color: @primary-warning-color;
    &:hover {
      background-color: @secondary-warning-color;
    }
  }

  &--error {
    background-color: @primary-error-color;
    &:hover {
      background-color: @secondary-error-color;
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
