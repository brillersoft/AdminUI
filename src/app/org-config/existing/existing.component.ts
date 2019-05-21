import { ButtonRendererComponent } from './../../renderer/button-renderer.component';
import { CommonService } from './../../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-existing',
  templateUrl: './existing.component.html'
})
export class ExistingComponent implements OnInit {
  listedEntitiesArray: Array<any> = [];
  frameworkComponents: any;
  columnDefs = [
    { headerName: 'Entity Name', field: 'Org_Name' },
    { headerName: 'Address', field: 'Address_Details.Address' },
    { headerName: 'Business Unit Name', field: 'bUnitName' },
    { headerName: 'Business Unit Code', field: 'bUnitCode' },
    { headerName: 'Business Division Name', field: 'bDivisionName' },
    { headerName: 'Business Division Code', field: 'bDivisionCode' },
    {
      headerName: 'Accounts', cellRenderer: 'buttonRenderer', cellRendererParams: {
        onClick: this.onBtnClick.bind(this),
        label: 'Click 2'
      }
    }
  ];
  constructor(private _commonService: CommonService, private router: Router) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    };
  }

  ngOnInit() {
    this.listedEntitiesArray = this._commonService.businessEntitiesDetails;
  }
  onBtnClick(e) {
    this._commonService.currentBusinessUnit = e.rowData;
    if (e.rowData['Entity_Id'] !== null && e.rowData['Entity_Id'] !== undefined) {
      this.router.navigateByUrl('/org-config/existing/' + e.rowData['Entity_Id']);
    } else {
      this.router.navigateByUrl('/org-config/existing');
    }
  }
}
