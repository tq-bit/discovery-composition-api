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

  const addTodo = () => {
    const id = _createRandomId();
    todoState.value.push({ id, title: todoInputModel.value });
  }

  const removeTodo = (index) => {
    todoState.value.splice(index, 1);
  }

  const _createRandomId = () => {
    const random = () => Math.floor(Math.random() * 999);
    return `${random()}-${random()}-${random()}`
  }

  return { todoInputModel, todoState, todoCount, removeTodo, addTodo }
}