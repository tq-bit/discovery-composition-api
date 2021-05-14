import { ref, computed } from 'vue';

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

  const todoCount = computed(() => todoState.value.length)
  const todoStateSorted = computed(() => {
    return _sortByTrueProp(todoState.value, "done");
  })

  const addTodo = () => {
    const id = _createRandomId(999);
    todoState.value.push({ id, title: todoInputModel.value });
  }

  const toggleDone = (todoId) => {
    const index = _findArrayIndexByItemId(todoState.value, todoId, 'id')
    todoState.value[index].done = !todoState.value[index].done;
  }

  const removeTodo = (todoId) => {
    const index = _findArrayIndexByItemId(todoId)
    todoState.value.splice(index, 1);
  }

  // Util functions
  const _findArrayIndexByItemId = (aItems, nItemId, sProp) => {
    return aItems.findIndex(item => item[sProp] === nItemId);
  }

  const _createRandomId = (nMaxVal) => {
    const random = () => Math.floor(Math.random() * nMaxVal);
    return `${random()}-${random()}-${random()}`
  }

  const _sortByTrueProp = (aItems, sProp) => {
    return aItems.sort((a, b) => a[sProp] === b[sProp] ? 0 : a[sProp] ? 1 : -1)
  }

  return { todoInputModel, todoState, todoCount, removeTodo, toggleDone, addTodo, todoStateSorted }
}