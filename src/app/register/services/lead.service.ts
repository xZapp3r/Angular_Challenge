import { Injectable } from '@angular/core';
import { AdminService } from '../../admin/services/admin.service'

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(private admin: AdminService) { }

  newLead(access:any): void {
    console.log("query"+ access)
    this.admin.query(access)
  }
}
