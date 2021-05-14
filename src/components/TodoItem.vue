<template>
  <li
    class="todo-element todo-list-element"
    :class="{ 'todo-list-element-done': item.done }"
  >
    <p
      v-if="!editing"
      @dblclick.self="startEditing"
      class="todo-list-element-title"
    >
      {{ item.title }}
    </p>
    <input
      v-else
      @keypress.enter="finishEditing"
      class="todo-input-edit"
      type="text"
      v-model="modelVal"
    />
    <footer class="todo-list-element-icons">
      <span
        v-if="!item.done"
        @click="$emit('todo-done', item.id)"
        class="todo-list-element-icon"
      >
        <i class="fas fa-check"></i>
      </span>
      <span
        v-if="item.done"
        @click="$emit('todo-done')"
        class="todo-list-element-icon"
        ><i class="fas fa-undo-alt"></i>
      </span>
      <span
        v-if="item.done"
        @click="$emit('todo-delete')"
        class="todo-list-element-icon"
      >
        <i class="fas fa-times"></i>
      </span>
    </footer>
  </li>
</template>

<script>
export default {
  data() {
    return {
      editing: false,
      modelVal: "",
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    startEditing() {
      this.modelVal = this.item.title;
      this.editing = true;
      setTimeout(() => document.querySelector("input.todo-input-edit").focus());
    },

    finishEditing() {
      this.$emit("todo-edit", this.modelVal);
      this.modelVal = "";
      this.editing = false;
    },
  },
};
</script>

<style scoped>
</style>