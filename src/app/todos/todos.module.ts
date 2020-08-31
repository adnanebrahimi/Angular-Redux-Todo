import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';


@NgModule({
  declarations: [TodosComponent, TodoComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
