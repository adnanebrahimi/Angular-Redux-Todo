import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Todo } from '../../../models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

