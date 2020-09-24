import { createReducer, on } from '@ngrx/store';
import { AddTodo, getAllTodo } from './todo.actions';
import { Todo } from './todo.state';

export interface State {
  todos: Todo[];
}

const initialState: State = {todos : []};

export const reducer = createReducer(
  initialState,
  on(getAllTodo),
  on(AddTodo, (state, {title}) => ({
    ...state,
    todos: [...state.todos, {title, id: 1, completed: false}]
  }))
);
