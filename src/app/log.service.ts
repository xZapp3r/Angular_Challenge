import { Injectable } from '@angular/core';
import { LeadService } from './register/services/lead.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private acces: any;

  constructor(  private lTC: LeadService ) { }
  public log(msg: any) {
    // LOGPROG
    // newAccess
    this.lTC.newLead(new Date() + ": " + JSON.stringify(msg));

    // newMessage ( text & email)
    
  }
  public chat(msg:any) {
    this.lTC.newLead(msg)
  }
}
