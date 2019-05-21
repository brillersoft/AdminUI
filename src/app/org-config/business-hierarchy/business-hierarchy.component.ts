import { CommonService } from './../../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BusinessTemplateObject, DivisionTemplateObject,
  AccountsTemplateObject, BusinessGroupTemplateObject, TeamsTemplateObject
} from 'src/app/Utils/common.util';

@Component({
  selector: 'app-business-config',
  templateUrl: './business-hierarchy.component.html'
})
export class BusinessHierarchyComponent implements OnInit {
  requestParam: any = {};
  showDivision: Array<Number> = [1, 0, 0, 0, 0, 0];

  allBusinessUnit: Array<BusinessTemplateObject> = [{ unit_name: '', unit_code: '', unit_desc: '' }];

  allBusinessDivision: Array<DivisionTemplateObject> = [{ unit_name: '', unit_code: '', unit_desc: '', b_unit_code: '' }];

  allAccounts: Array<AccountsTemplateObject> = [{ unit_name: '', unit_code: '', unit_desc: '', division_unit_code: '' }];

  allBusinessGroup: Array<BusinessGroupTemplateObject> = [{ unit_name: '', unit_code: '', unit_desc: '', accounts_unit_code: '' }];

  allTeams: Array<TeamsTemplateObject> = [{ unit_name: '', unit_code: '', unit_desc: '', b_group_unit_code: '' }];

  request = {
    'allBusinessUnit': this.allBusinessUnit,
    'allBusinessDivision': this.allBusinessDivision,
    'allAccounts': this.allAccounts,
    'allBusinessGroup': this.allBusinessGroup,
    'allTeams': this.allTeams
  };
  constructor(
    private router: Router,
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.requestParam['division'] = [this.allBusinessUnit];
  }

  saveBusinessUnitDetails() {
    // this.commonService.postData('saveBusinessUnitDetails', this.requestParam).subscribe(res => {
    //   if (res) {
    //     alert('Details Saved');
    //   } else {
    //     this.commonService.showHttpErrorMsg();
    //   }
    // });
    console.log(this.request);
  }

  addNew(type: any) {
    switch (type) {
      case 'bUnit':
        if (this.allBusinessUnit.length !== 0) {
          if (this.allBusinessUnit[this.allBusinessUnit.length - 1].unit_name !== '') {
            this.allBusinessUnit.push({ unit_name: '', unit_code: '', unit_desc: '' });
          } else {
            alert('Please Fill the details for the last one.');
          }
        } else {
          this.allBusinessUnit.push({ unit_name: '', unit_code: '', unit_desc: '' });
        }
        break;
      case 'division':
        if (this.allBusinessDivision.length !== 0) {
          if (this.allBusinessDivision[this.allBusinessDivision.length - 1].unit_name !== '') {
            this.allBusinessDivision.push({ unit_name: '', unit_code: '', unit_desc: '', b_unit_code: '' });
          } else {
            alert('Please Fill the details for the last one.');
          }
        } else {
          this.allBusinessDivision.push({ unit_name: '', unit_code: '', unit_desc: '', b_unit_code: '' });
        }
        break;
      case 'account':
        if (this.allAccounts.length !== 0) {
          if (this.allAccounts[this.allAccounts.length - 1].unit_name !== '') {
            this.allAccounts.push({ unit_name: '', unit_code: '', unit_desc: '', division_unit_code: '' });
          } else {
            alert('Please Fill the details for the last one.');
          }
        } else {
          this.allAccounts.push({ unit_name: '', unit_code: '', unit_desc: '', division_unit_code: '' });
        }
        break;
      case 'bGroup':
        if (this.allBusinessGroup.length !== 0) {
          if (this.allBusinessGroup[this.allBusinessGroup.length - 1].unit_name !== '') {
            this.allBusinessGroup.push({ unit_name: '', unit_code: '', unit_desc: '', accounts_unit_code: '' });
          } else {
            alert('Please Fill the details for the last one.');
          }
        } else {
          this.allBusinessGroup.push({ unit_name: '', unit_code: '', unit_desc: '', accounts_unit_code: '' });
        }
        break;
      case 'team':
        if (this.allTeams.length !== 0) {
          if (this.allTeams[this.allTeams.length - 1].unit_name !== '') {
            this.allTeams.push({ unit_name: '', unit_code: '', unit_desc: '', b_group_unit_code: '' });
          } else {
            alert('Please Fill the details for the last one.');
          }
        } else {
          this.allTeams.push({ unit_name: '', unit_code: '', unit_desc: '', b_group_unit_code: '' });
        }
        break;
      default:
        break;
    }
  }

  delete(type: any, index: any) {
    switch (type) {
      case 'bUnit':
        this.allBusinessUnit.splice(index, 1);
        break;
      case 'division':
        this.allBusinessDivision.splice(index, 1);
        break;
      case 'account':
        this.allAccounts.splice(index, 1);
        break;
      case 'bGroup':
        this.allBusinessGroup.splice(index, 1);
        break;
      case 'team':
        this.allTeams.splice(index, 1);
        break;
      default:
        break;
    }
  }

  updateHierarchy(type: any) {
    switch (type) {
      case 'bUnit':
        console.log('Bunits:' + this.allBusinessUnit);
        if (this.allBusinessUnit[this.allBusinessUnit.length - 1].unit_name !== '') {
          this.showDivision[1] = 1;
        } else {
          alert('Please Fill the Business Unit Details');
        }
        break;
      case 'division':
        console.log('Divisions:' + this.allBusinessDivision);
        if (this.allBusinessDivision[this.allBusinessDivision.length - 1].unit_name !== '') {
          this.showDivision[2] = 1;
        } else {
          alert('Please Fill the Divisions Details');
        }
        break;
      case 'account':
        console.log('Accounts:' + this.allAccounts);
        if (this.allAccounts[this.allAccounts.length - 1].unit_name !== '') {
          this.showDivision[3] = 1;
        } else {
          alert('Please Fill the Divisions Details');
        }
        break;
      case 'bGroup':
        break;
      case 'team':
        break;
      default:
        break;
    }
  }
}
