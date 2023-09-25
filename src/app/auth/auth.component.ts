import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"
import { RegisterService } from '../register/services/register.service';


import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  // public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient, private router: Router, private auth: RegisterService) {
  }
  ngOnInit(): void {
    this.getMethod()
    this.router;
  }
  @Input() item = '';

  public getMethod() {

  }
  // public getAdmin(op:boolean):void {
  //   if(op) {
  //     this.router.navigate(['/admin'])

  //   }
  // }
  // public getLogin(op:boolean):void {
  //   this.router.navigate(['/dashboard'])
  // }

  // public loginMethod() {
  //   if(ngSubmit)
  // }
  

        // console.log(f.valid)
        // console.log(f.value.login)
  
    

  
  onSubmit(f:NgForm): void {
    const auth = this.auth.goingToLogin(f.value.login, f.value.password)
    if (auth) {
      console.log(auth)
      // this.router.navigate(['/dashboard'])
    }
  }


}


