export const updateTodo = (todo: Todo, todoList: Todo[]) => {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === todo.id) {
      todoList.splice(i, 1, todo);
      break;
    }
  }
  return todoList;
};
