<template>
  <button class="todo-element todo-button">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
</style>