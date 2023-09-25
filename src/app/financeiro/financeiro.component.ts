import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss']
})
export class FinanceiroComponent implements OnInit {

  // @Input() usuarios: Array<any>;

  // @Output() selecionado = new EventEmitter();

  constructor() { 
    
  }
  public onSubmit(f: any):void {
    
  }

  ngOnInit() {
  }

  selecionando(usuario: any) {
    // this.selecionado.emit(usuario);
  }
}
