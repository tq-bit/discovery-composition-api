import { ref, computed } from 'vue';

export default function useTodos() {
  const todoInputModel = ref("");
  const todoState = ref([
    {
      id: "102-193",
      title: "Wash the dishes",
    },
    {
      id: "102-194",
      title: "Do the chores",
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
    return Math.ceil(Math.random() * 100 + "-" + Math.random() * 100)
  }

  return { todoInputModel, todoState, todoCount, removeTodo, addTodo }
}