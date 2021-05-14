<template>
  <main class="app-wrapper">
    <todo-input v-model="todoInputModel"></todo-input>
    <todo-button @click="addTodo" label="Add to list"></todo-button>
    <todo-list :todos="todoState"></todo-list>
    {{ todoCount }}
    {{ todoState }}
  </main>
</template>

<script>
import TodoInput from "@/components/TodoInput.vue";
import TodoButton from "@/components/TodoButton.vue";
import TodoList from "@/components/TodoList.vue";

import useTodos from "@/use/useTodos.js";

export default {
  setup() {
    const {
      todoInputModel,
      todoCount,
      addTodo,
      todoState,
      removeTodo,
    } = useTodos();
    return { todoInputModel, todoCount, addTodo, todoState, removeTodo };
  },
  components: {
    TodoInput,
    TodoButton,
    TodoList,
  },
};
</script>

<style>
@import "./assets/styles.css";
</style>
