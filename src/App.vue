<template>
  <main class="app-wrapper">
    <todo-list :todos="todoState"></todo-list>
  </main>
</template>

<script>
import TodoList from "@/components/TodoList.vue";


export default {
  components: {
    TodoList
  }
};
</script>

<style>
@import "./assets/styles.css";


</style>
