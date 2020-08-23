import { Component, OnInit } from '@angular/core';
import { ToDoAppModel } from '../../models/toDoAppModel'
import { ToDoServicesService } from '../../servecies/to-do-services.service'

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css']
})
export class ToDoAppComponent implements OnInit {
  toDoData: ToDoAppModel[]

  constructor(private toDoService: ToDoServicesService) { }

  ngOnInit(): void {
    this.toDoService.getToDos().subscribe(todos => {
      this.toDoData = todos
    });
  }

  deleteToDo(todo: ToDoAppModel) {
    console.log(todo)
    this.toDoData = this.toDoData.filter(item => item.id != todo.id)
    this.toDoService.deleteTodos(todo).subscribe();
  }

}
