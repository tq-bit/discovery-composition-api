<template>
  <header class="todo-header">
    <todo-input v-model="todoInputModel"></todo-input>
    <todo-button @click="addTodo" label="Add to list"></todo-button>
  </header>
  <transition-group tag="ul" class="todo-list" appear name="fade-move">
    <todo-item
      v-for="todo in todoStateSorted"
      :key="todo"
      :item="todo"
      @todo-done="toggleDone($event)"
      @todo-delete="removeTodo($event)"
    ></todo-item>
  </transition-group>
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

<style scoped>
.fade-move-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-move-enter-to,
.fade-move-leave-from {
  transition: all 0.5s;
}

.fade-move-leave-to {
  transform: translateY(-30px);
  transition: all 0.5s;
  opacity: 0;
}

.fade-move-leave-active {
  position: absolute;
}
</style>