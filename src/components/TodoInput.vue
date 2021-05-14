<template>
  <label class="todo-label">{{ label }}</label>
  <input
    class="todo-element todo-input"
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },

    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style>
</style>