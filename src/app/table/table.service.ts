import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class TableService {

  constructor(private http: HttpClient) { 

  }
  getTimesFunction() {
    return this.http.get("http://localhost:3020/users/");

    // const date = new Date("dd-mm-yyyy", "hh:mm");
  }
  getFinanceiro() {
    return this.http.get("http://localhost:3020/finance/")
  }

  getCars() {
    return this.http.get("http://localhost:3020/cars/")
  }
  getTodo() {
    return this.http.get("http://localhost:3020/todo/")
  }


  overFlowSpecs(op: string) {
    const scr = document.getElementById("div")
    // console.log(scr?.scrollLeft);
    if(op == 'financeiro') {
      const finan = scr?.scrollTo({
        left: 0, behavior: 'smooth'
      }) 
    }
    if(op == 'carros') {
      const finan = scr?.scrollTo({
        left: 1650, behavior: 'smooth'
      })
    }
    if(op == 'tickets') {
      const finan = scr?.scrollTo({
        left: 3290, behavior: 'smooth'
      })
    }
  }



}
