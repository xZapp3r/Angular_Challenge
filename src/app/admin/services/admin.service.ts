import { Injectable, OnInit } from '@angular/core';
// import { access } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements OnInit  {
  public quantity:number = 0;
  constructor() { 
  }
  query(str: string):void {
    // console.log(str + "HeeRERERE")
    if(str == 'accessou') {
      this.quantity++
      console.log('++1')
    }
    if(str == '') {
      
    }
  }

  ngOnInit(): void {
    console.log('verbo')
  }
  
}
