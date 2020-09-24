import { createAction, props } from '@ngrx/store';

export const getAllTodo = createAction(
  '[Todo] Get All Todo'
);

export const getAllTodoSuccess = createAction(
  '[Todo] Get all Todo Success'
);

export const getAllTodoFailure = createAction(
  '[Todo] Get all Todo Failure'
);

export const AddTodo = createAction(
  '[Todo] Add Todo',
  props<{title: string}>()
);

