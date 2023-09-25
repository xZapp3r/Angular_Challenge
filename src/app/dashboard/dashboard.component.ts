import { Component, OnInit } from '@angular/core';
import { TableService } from '../table/table.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  

})
export class DashboardComponent implements OnInit {

 
  constructor(public tablePage: TableService) {
    // Called first time before the ngOnInit()
    // this.tablePage.overFlowSpecs("app")
  }

  panelOpenState = false;
  public op = 'financeiro'

  public changeBackground(op: string): any {
    this.tablePage.overFlowSpecs(op)
  }


  public openTable(event: string, op:string ): void {
    
    switch (op) {
      case 'financeiro' : {
        this.changeBackground(op);
        this.op = op;

        break
      }
      case 'carros' : {
        this.changeBackground(op);
        this.op = op;

        break
      }
      case 'tickets' : {
        this.changeBackground(op);
        this.op = op;

        break
      }
      default : {
      }
    }
  }
  public addReference(): void {
    console.log(this.op)
    
  }

  ngOnInit(): void {
    

  }
}
