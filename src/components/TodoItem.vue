<template>
  <li class="todo-element todo-list-item">
    <h3 class="todo-list-element-title">{{ item.title }}</h3>
  </li>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>