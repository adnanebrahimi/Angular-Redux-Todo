import { State } from '@ngxs/store';
import { List } from './../models/list.model';

export class ListStateModel {
  public lists: List[] = [];
}

@State<ListStateModel>({
  name: 'list',
  defaults: {
    lists: []
  }
})
export class ListState {}
