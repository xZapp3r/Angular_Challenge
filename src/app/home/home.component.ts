import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import {ScrollingModule} from '@angular/cdk/scrolling';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private logger: LogService, private scr: ScrollingModule) {
  }

  testLog(): void {
      this.logger.log("Test the `log()` Method");
  }
  ngOnInit() {
    this.logger.log("Teste the access method");
    if(this.scr) {
      // const pos = this.scr.ViewportScrollPosition()
    }
  }
  onMouseEnter():void {

    // op?.style.color 
    var time = 0;
    // const mouseBackground = document.quertSelection<HTML
    const mouseTarget = document.querySelector<HTMLInputElement>("#word")!;
    // console.log(mouseTarget.innerText)
    // mouseTarget.<HT>value
    // myRow.querySelector('.my-class').value = myVal
    // mouseTarget.value = '';
    // mouseTarget.value = aa;
    // document.getElementById('word').querySelector<HTMLInputElement>('.myClass').value

    // mouseTarget?.addEventListener("mouseenter", (e) => {
      // mouseTarget.style.color = "green";
      // const man = mouseTarget?.addEventListener("mouseleave", () => {
      //   return true
      // })
      // console.log(man)
    // if()) {

    // }
    // mouseTarget.style.animation(sourD, 1, 1, 1,)
      const times = setTimeout((e:any) => {
        //  let sq =
        // sq = "strong"
        mouseTarget.innerText = "Veícule um rastreador"


      }, 4000);
    // })

  }
  announce(): any {
    console.log('exibi')
    const heat = setTimeout(() => {
      var heat = "Aluguel de Carros"

    }, 4000)

    return heat
  }
}
