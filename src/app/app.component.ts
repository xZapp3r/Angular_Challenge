import { VariableBinding } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit,  OnDestroy {
  title = 'views';
  timerChat = 0
  timerConf = 0
  nextId = 1;


  constructor(private Logs: LogService) {

  }


  // @Input()
  // ngIfThen:
  // config
  ruleTalk(op:string): void {
    console.log('qualquere')

    // console.log( op);
    var tec = this.timerConf++
    // var p = document.querySelector<HTMLInputElement>('app-chat')!;
    const p = document.querySelector<HTMLInputElement>('#tam')!
    
    /* Funcao que implementa show/hide  */

    
    if( tec  % 2 == 0) {
      // console.log(p)
      var dsp = 'display'
      p.className = "display"
    } else {
      p.className = "tam"
    }
    // if( op == )

  }

  timerStart(): void {
    let time: Date = new Date('dd/mm/yyyy  hh:mm');
    console.log('time nowwww'+ time)
    }
  onload(): void {
    this.timerStart();



  }
  back(op:string): void {
    console.log(op)
  }
  
  prodChat(): void {
    var dec = this.timerChat++
    this.Logs.chat(dec);
    var p = document.querySelector<HTMLInputElement>('app-chat')!;

    /* Funcao que implementa show/hide  */

    if(dec  % 2 == 0) {
      p.className = 'shower'
      console.log(p)
        
    } else {
      var block = 'please'
      p.className = `${block}`
    }

  }
  private id = this.nextId++
  ngOnInit(): void {
     
    this.onload()

    this.Logs.log(`Spy this $#{nextId} OnInit`)
    

  }
  ngOnDestroy(): void {

  }
  startLeading():void {
    const hero = new Leader('olaasdasdarRRRRRRRRRRRRRRRR');
    hero.here('asdasdasd')
  }

}

class Leader {
  mess:string;
  // nome: string;
  // super(startLeading:void ): {

  // }
  constructor(message:string) {
    this.mess = message
  }
  here(op:string):void {
    if(op) {
      console.log('asdasdasdasd')

    }
    
    // `${block}`
  }
}