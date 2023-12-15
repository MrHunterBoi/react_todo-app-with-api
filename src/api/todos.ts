import { NoIdTodo, Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const postTodo = (todo: NoIdTodo) => {
  return client.post<Todo>('/todos', todo);
};

export const patchTodo = (todo: Todo) => {
  return client.patch<Todo>(`/todos/${todo.id}`, todo);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

// Add more methods here