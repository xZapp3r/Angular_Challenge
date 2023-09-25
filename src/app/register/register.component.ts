import { Component  } from '@angular/core';
import {Router} from "@angular/router"
import { LoggerService as Logger } from './services/logger.service';
import { HttpClient } from '@angular/common/http'
import { take, tap } from 'rxjs'
import { RegisterService } from './services/register.service'
import  User  from './services/user.class'
// import { create } from 'domain';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public getJsonValue: any;
  hasEmail: any;
  hasEmail$: any;
  public createUser: any;
  public hasReg: any;
  // public bcrypt = require('bcrypt');

  constructor(private http: HttpClient, private router: Router, private regUser:RegisterService, private log: Logger ) {
    
  }
  ngOnInit(): void {
    // Logger.debug('logger DEBUG message', { message: 'message'});
    // Logger.log('logger INFO message', { message: 'message'});
    // Logger.warn('logger WARN message', { message: 'message'});
    // Logger.error('logger ERROR message', { message: 'message'});
  }
  public logRegister():void {
    const data = new Date();
    // const id = this.regUser.hasTokenId("Created User:", data)
    // Logger.log("Inserted User"+ id + "")
    
    

  }
  public async verifyEmail(email: string):Promise<any> {
    this.hasEmail$ = await this.regUser.VerifyEmailMethod(email).pipe(tap((data) => {this.hasEmail = data}))
    return this
  }
  public async insertUser(createUser: User):Promise<any>  {
    this.hasReg  = await this.regUser.postMethod(createUser).pipe(tap((data) => {this.createUser = data}))
    .subscribe({ next: console.log, error: err => console.log(err.message)  })
    this.logRegister()
    alert('Usuario criado com sucesso!!!')
    this.getLogin(true, createUser.user);

    return this.hasReg
  }
  public getLogin(op:boolean, user:string):void {
    if(op) {
      this.router.navigate(['/login', [user]])
    }
  }

  public acsRouteApp(tkID: string) {

  }
    
  async onSubmit(f:any): Promise<any> {

    if(f.valid == true) {
      if(f.value.login != '' && f.value.password != '' && f.value.email != '') {
        this.createUser = new User(f.value.login, f.value.password, f.value.email)
        const hasRegis = await this.verifyEmail(this.createUser.email)
        const regis = hasRegis.hasEmail
        console.log(regis)
        if(regis)
        {
          this.insertUser(this.createUser)
        } else {
          alert('email existente')

        }

      } else {
        alert("Campos vazios precisam ser preenchidos")
      }
    }
  }
  
}
