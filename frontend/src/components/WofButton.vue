<template>
  <button :class="`button button--${type}`" @click="click">
    <slot />
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
        return ["accent", "positive", "warning", "error"].includes(value)
      }
    }
  },
  methods: {
    click: function(event) {
      this.$emit("click", event)
    }
  }
}
</script>

<style scoped>
.button {

}

.button--accent {

}

.button--positive {}

.button-warning {}

.button-error {}
</style>
