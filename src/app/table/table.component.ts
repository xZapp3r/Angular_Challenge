import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs'
import { TableService } from './table.service';
import { DashboardComponent } from '../dashboard/dashboard.component'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  myData: any;
  myData$: any;

  myFinans: any;
  myFinans$: any;

  myCars: any;
  myCars$: any;

  myTodo: any;
  myTodo$: any;
  constructor(private tableService: TableService) {

  }
  getUsers() {
    this.myData$ = this.tableService.getTimesFunction()
    .pipe(tap((data) => {this.myData = data}) )

  }
  getFinans() {
    this.myFinans$ = this.tableService.getFinanceiro()
    .pipe(tap((data) => {this.myFinans = data}))
  }
  getCars() {
    this.myCars$ = this.tableService.getCars()
    .pipe(tap((data) => {this.myCars = data}))
  }
  getTodo() {
    this.myTodo$ = this.tableService.getTodo()
    .pipe(tap((data) => {this.myTodo = data}))
  }



  ngOnInit(): void {
    this.getUsers()
    this.getFinans()
    this.getCars()
    this.getTodo()
  }
}