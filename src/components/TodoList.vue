<template>
  <todo-input v-model="todoInputModel"></todo-input>
  <todo-button @click="addTodo" label="Add to list"></todo-button>

  <ul class="todo-list">
    <todo-item
      v-for="(todo, index) in todoState"
      :key="todo"
      :item="todo"
      :index="index"
    ></todo-item>
  </ul>
</template>

<script>
import TodoInput from "@/components/TodoInput.vue";
import TodoButton from "@/components/TodoButton.vue";
import TodoItem from "./TodoItem.vue";

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
    TodoItem,
  },
};
</script>

<style >
</style>