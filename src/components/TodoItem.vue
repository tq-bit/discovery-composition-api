<template>
  <li class="todo-element todo-list-element" :class="{'todo-list-element-done': item.done}">
    <h3 class="todo-list-element-title" >{{ item.title }}</h3>
    <footer class=".todo-list-element-icons ">
      <span v-if="!item.done" @click="$emit('todo-done')" class="todo-list-element-icon">✔</span>
      <span v-if="item.done" @click="$emit('todo-delete')" class="todo-list-element-icon">✗</span>
    </footer>
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