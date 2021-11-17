<template>
  <div class="input">
    <div class="input__header">
      <h2 class="input__title">{{ name}}</h2>
      <!-- This error will be replaced with WofSmallError component -->
      <div class="temporary-error" v-if="error.length && !isFocused">{{ error }}</div>
    </div>
    <input v-model="value"
           :type="type"
           :class="fieldClass"
           :maxlength="maxLength"
           @focus="isFocused = true"
           @blur="isFocused = false" />
  </div>
</template>

<script>
export default {
  name: 'WofInput',
  props: {
    name: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    initValue: {
      type: String
    },
    error: {
      type: String,
      default: ''
    },
    maxLength: {
      type: Number,
    }
  },
  emits: ['change'],
  data() {
    return {
      value: this.initValue,
      isFocused: false,
    };
  },
  computed: {
    fieldClass() {
      return this.error.length && !this.isFocused ? 'input__field input__field--invalid' : 'input__field';
    }
  },
  watch: {
    value() {
      this.$emit('change', this.value);
    }
  }
};
</script>

<style lang="less">
@import './common.less';

.input {
  display: flex;
  flex-direction: column;
  padding: 2em;

  .input__header {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    .input__title {
      margin: 0;
      margin-right: 0.5em;
      font-weight: 500;
    }
  }

  .input__field {
    border: 2px solid transparent;
    font-size: 1.4rem;
    padding: 0.2em;
    box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);

    &:focus {
      background-color: @secondary-neutral-color;
      outline: none;
      box-shadow: none;
    }

    &.input__field--invalid {
      border-color: @primary-error-color;
    }
  }
}
</style>