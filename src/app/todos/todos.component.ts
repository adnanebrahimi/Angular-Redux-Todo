import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos = [
    {
      id: 1,
      title: 'List 1'
    },
    {
      id: 2,
      title: 'List 2'
    },
    {
      id: 3,
      title: 'List 3'
    },
    {
      id: 4,
      title: 'List 4'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
