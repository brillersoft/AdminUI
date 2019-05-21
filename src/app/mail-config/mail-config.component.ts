import { UtilService } from './../util.service';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-mail-config',
  templateUrl: './mail-config.component.html'
})
export class MailConfigComponent implements OnInit {
  requestParam: any = {};
  Domain_Types: any;
  licenceType =  false;
  selectAllClients = true;
  selectAllEmployees = true;
  clientLocation: any;
  constructor(public commonService: CommonService, private utilService: UtilService) { }

  ngOnInit() {
    this.utilService.getLicenceType();
    if (this.utilService.licence_Type === 'all') {
      this.licenceType = true;
    }
    if (this.licenceType === true) {
      // this.selectAllClients = true;
      this.selectAllClients = false;
    }
    this.Domain_Types = ['OnPremise', 'OnCloud', 'Hybrid'];
  }

  saveMailId() {
    console.log('Mail Details:' + this.requestParam);
    console.log('Checked:' + this.licenceType);
    console.log('this.selectAllClients:' + this.selectAllClients);
  }

  chooseAllClients() {
    this.selectAllClients = !this.selectAllClients;
  }

  chooseAllEmployeess() {
    this.selectAllEmployees = !this.selectAllEmployees;
  }

}
