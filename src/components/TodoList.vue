<template>
  <todo-input v-model="todoInputModel"></todo-input>
  <todo-button @click="addTodo" label="Add to list"></todo-button>

  <ul class="todo-list">
    <div v-for="todo in todoStateSorted" :key="todo" >
      <todo-item :item="todo" @todo-done="toggleDone($event)" @todo-delete="removeTodo($event)"></todo-item>
    </div>
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
      todoStateSorted,
      removeTodo,
      toggleDone,
    } = useTodos();
    return {
      todoInputModel,
      todoCount,
      addTodo,
      todoState,
      todoStateSorted,
      toggleDone,
      removeTodo,
    };
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