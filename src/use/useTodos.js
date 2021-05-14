import { ref, computed } from 'vue';
import { findArrayIndexByItemId, createRandomId, sortByTrueProp } from '@/composable/utility.js';

export default function useTodos() {
  const todoInputModel = ref("");
  const todoState = ref([]);

  const todoStateSorted = computed(() => {
    return sortByTrueProp(todoState.value, "done");
  });
  const todoCount = computed(() => {
    return todoState.value.length
  });

  const addTodo = () => {
    const id = createRandomId(999);
    todoState.value.push({ id, title: todoInputModel.value });
    todoInputModel.value = ""
  };

  const toggleDone = (todoId) => {
    const index = findArrayIndexByItemId(todoState.value, todoId, 'id')
    todoState.value[index].done = !todoState.value[index].done;
  };

  const editTodo = (todoId, newTitle) => {
    const index = findArrayIndexByItemId(todoState.value, todoId, 'id');
    todoState.value[index].title = newTitle
  }

  const removeTodo = (todoId) => {
    const index = findArrayIndexByItemId(todoState.value, todoId, 'id')
    todoState.value.splice(index, 1);
  };

  return { todoInputModel, todoState, todoCount, editTodo, removeTodo, toggleDone, addTodo, todoStateSorted };
}