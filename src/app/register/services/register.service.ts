import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AuthRegisterService } from '../-auth-register.service'
import User from './user.class'
// import { catch}'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public getMethod() {
    return this.http.get('http://localhost:3020/users');
  }
  public postMethod(createUser:User) {
    return this.http.post('http://localhost:3020/users/register', createUser);
  }
  public VerifyEmailMethod(userEmail:string) {
    return this.http.get('http://localhost:3020/users/find/'+userEmail)
  }
  public hasPasswordHash(userPass:string) {
    return this.http.get('http://localhost:3020/users/find/'+userPass);
  }
  public goingToLogin(user:string, pass: any) {
    return this.http.post('http://localhost:3020/users/login', user, pass);

  }

}
