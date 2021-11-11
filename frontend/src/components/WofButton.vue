<template>
  <button :class="`button button--${type}`" @click="onClick()">
    <div v-if="this.$slots.icon" :class="this.$slots.default ? 'button--icon' : ''"><slot name="icon"/></div>
    <slot/>
  </button>
</template>

<script>
export default {
  name: "WofButton",
  props: {
    type: {
      type: String,
      required: true,
      default: "accent",
      validator(value) {
        return ["accent", "positive", "warning", "error", "disabled"].includes(value)
      }
    }
  },
  methods: {
    onClick: function(event) {
      this.$emit("click", event)
    }
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
  border-radius: 1.25rem;
  padding-top: 0.563rem;
  padding-bottom: 0.563rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: @primary-bright-text-color;
}
.button:active {
  color: @primary-dark-text-color;
}

.button--icon {
  margin-right: 0.7rem;
}

.button--accent {
  background-color: @primary-accent-color;
}
.button--accent:hover {
  background-color: @secondary-accent-color;
}

.button--positive {
  background-color: @primary-positive-color;
}
.button--positive:hover {
  background-color: @secondary-positive-color;
}

.button--warning {
  background-color: @primary-warning-color;
}
.button--warning:hover {
  background-color: @secondary-warning-color;
}

.button--error {
  background-color: @primary-error-color;
}
.button--error:hover {
  background-color: @secondary-error-color;
}

.button--disabled {
  background-color: @primary-neutral-color;
  color: @secondary-neutral-color;
}
.button--disabled:active {
  color: @secondary-neutral-color;
}

</style>
