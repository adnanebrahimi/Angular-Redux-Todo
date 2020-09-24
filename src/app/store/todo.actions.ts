import { createAction, props } from '@ngrx/store';

export const getAllTodo = createAction(
  '[Todo] Get All Todo'
);

export const AddTodo = createAction(
  '[Todo] Add Todo',
  props<{title: string}>()
);

