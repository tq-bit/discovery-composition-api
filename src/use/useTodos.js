import { ref, computed } from 'vue';
import { findArrayIndexByItemId, createRandomId, sortByTrueProp } from '@/composable/utility.js';

export default function useTodos() {
  const todoInputModel = ref("");
  const todoState = ref([
    {
      id: "102-193",
      title: "Wash the dishes",
      done: false
    },
    {
      id: "102-195-193",
      title: "Do the chores",
      done: false
    },
    {
      id: "102-195-192",
      title: "Do the chores",
      done: true
    },
  ]);

  const todoStateSorted = computed(() => {
    return sortByTrueProp(todoState.value, "done");
  });
  const todoCount = computed(() => {
    return todoState.value.length
  });

  const addTodo = () => {
    const id = createRandomId(999);
    todoState.value.push({ id, title: todoInputModel.value });
  };

  const toggleDone = (todoId) => {
    const index = findArrayIndexByItemId(todoState.value, todoId, 'id')
    todoState.value[index].done = !todoState.value[index].done;
  };

  const removeTodo = (todoId) => {
    const index = findArrayIndexByItemId(todoState.value, todoId, 'id')
    todoState.value.splice(index, 1);
  };

  return { todoInputModel, todoState, todoCount, removeTodo, toggleDone, addTodo, todoStateSorted };
}