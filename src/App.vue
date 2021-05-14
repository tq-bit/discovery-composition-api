<template>
  <header class="app-wrapper">
    <h1 class="app-header">Composition API - powered Todo list</h1>
  </header>
  <main class="app-wrapper">
    <todo-list :todos="todoState"></todo-list>
  </main>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    TodoList,
  },
};
</script>

<style>
@import "./assets/styles.css";
</style>
