export enum TodoActionTypes {
  AddNewTodo = '[Todo Page] Add New Todo',
  ToggleTodoItem = '[Todo Page] Toggle Todo Item',
  DeleteTodoItem = '[Todo Page] Delete Todo Item',
  UpdateTodoItem = '[Todo Page] Update Todo Item',
  GetAllTodoItems = '[Todo Page] Get All Todo Items',
}


export class AddNewTodo {
  static readonly type = TodoActionTypes.AddNewTodo;
  constructor(public title: string) {}
}

export class UpdateTodo {
  static readonly type = TodoActionTypes.UpdateTodoItem;
  constructor(public title: string, public id: number) {}
}

export class DeleteTodo {
  static readonly type = TodoActionTypes.DeleteTodoItem;
  constructor(public id: number) {}
}

export class GetAllTodo {
  static readonly type = TodoActionTypes.GetAllTodoItems;
}




