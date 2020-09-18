
import { List } from './../models/list.model';
export enum ListActionTypes {
  AddNewList = '[Lists Page] Add New List',
  GetAllList = '[Lists Page] Get All List',
  UpdateList = '[Lists Page] Update List',
  DeleteList = '[Lists Page] Delete List'
}

export class AddNewList {
  static readonly type = ListActionTypes.AddNewList;
  constructor(public list: List){}
}

export class GetAllList {
  static readonly type = ListActionTypes.GetAllList;
}

export class UpdateList {
  static readonly type = ListActionTypes.UpdateList;
  constructor(public title: string) {}
}

export class DeleteList {
  static readonly type = ListActionTypes.DeleteList;
  constructor(public id: number) {}
}
