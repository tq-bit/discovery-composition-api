<template>
  <ul class="todo-list">

  <todo-item
    v-for="(todo, index) in todos"
    :key="todo"
    :item="todo"
    :index="index"
  ></todo-item>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  setup() {},
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: {
    TodoItem,
  },
};
</script>

<style >
</style>