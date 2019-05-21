import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { UtilService } from '../util.service';
@Component({
  selector: 'app-server-config',
  templateUrl: './server-config.component.html'
})
export class ServerConfigComponent implements OnInit {
  Service_Providers: any;
  Domain_Types: any;
  allConfig: any;

  params: any = {};
  requestParam: any = {};
  columnDefs = [
    { headerName: 'Email Domain Name', field: 'emailDomainName', editable: true },
    { headerName: 'Server Deployment Type', field: 'serverDeploymentType', editable: true },
    { headerName: 'Email Service Provider', field: 'emailServiceProvider', editable: true },
    { headerName: 'Version Num', field: 'versionNum' },
    { headerName: 'Status', field: 'status' },
    { headerName: 'User Name', field: 'userName' },
    { headerName: 'Exchange Server URL', field: 'exchangeServerURL', editable: true },
    { headerName: 'Exchange Version', field: 'exchangeVersion', editable: true },
    {
      headerName: 'Actions', cellRenderer: function (params) {
        return '<label class="switch"><input type="checkbox" checked><span class="slider round"></span></label><i class="far fa-trash-alt"></i>';
      }
    }
  ];
  constructor(private _commonService: CommonService, private utilService: UtilService) {
  }

  ngOnInit() {
    // this._commonService.fetchData('getConfigOptions').subscribe(data => {
    //   const localdata = data.json();
    //   this.Service_Providers = localdata.Service_Providers;
    //   this.Domain_Types = localdata.Domain_Types;
    //   // console.log(this.Deployment_Types );
    // }, err => {
    //   this._commonService.showHttpErrorMsg();
    // });
    this.Domain_Types = ['OnPremise', 'OnCloud', 'Hybrid'];
    this.Service_Providers = ['MicrosoftExchange', 'Gmail', 'LotunNotes', 'Zymbra', 'Yahoo', 'Outlook', 'Office365'];
    this.fetchConfig();
  }
  fetchConfig() {
    this.utilService.showSpinner();
    this._commonService.fetchData('getAllServerConfigs').subscribe(data => {
      this.allConfig = data.json();
      this.utilService.hideSpinner();
    }, err => {
      this._commonService.showHttpErrorMsg();
      this.utilService.hideSpinner();
      this._commonService.goToErrorPage();
    });
    this.allConfig = [
      {
        'emailDomainId': 1,
        'emailDomainName': 'irissoftware.com',
        'serverDeploymentType': 'OnPremise',
        'emailServiceProvider': 'MicrosoftExchange',
        'status': '1',
        'userName': 'abhishek.gupta02@irissoftware.com',
        'exchangeServerURL': 'https://mailiris.irissoftware.com/ews/exchange.asmx',
        'exchangeVersion': 'Exchange2010_SP2'
      },
      {
        'emailDomainId': 100,
        'emailDomainName': 'irissoftware.com',
        'serverDeploymentType': 'OnPremise',
        'emailServiceProvider': 'MicrosoftExchange',
        'status': '1', 'userName': 'abhishek.gupta02@irissoftware.com',
        'exchangeServerURL': 'https://mailiris.irissoftware.com/ews/exchange.asmx',
        'exchangeVersion': 'Exchange2010_SP2'
      },
      {
        'emailDomainId': 101,
        'emailDomainName': 'sdfs',
        'serverDeploymentType': 'OnCloud',
        'emailServiceProvider': null,
        'status': '1',
        'userName': 'dfds',
        'exchangeServerURL': 'sdfsdf',
        'exchangeVersion': 'sdfsd'
      },
      {
        'emailDomainId': 102,
        'emailDomainName': 'esss',
        'serverDeploymentType': 'OnCloud',
        'emailServiceProvider': null,
        'status': '1',
        'userName': 'aa',
        'exchangeServerURL': 'dfdsfdsf',
        'exchangeVersion': 'df'
      }
    ];
  }
  saveOnServer() {
    this.params = {
      'requestType': '',
      'requestParam': this.requestParam
    };
    this._commonService.postData('saveServerConfigOptions', this.params).subscribe(data => {
      this.fetchConfig();
      this.requestParam = {};
      // this._commonService.hideLoader();
    }, err => {
      this._commonService.showHttpErrorMsg();
    });
  }

}
