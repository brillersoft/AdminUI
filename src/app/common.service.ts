import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isServerError = false;
  showSubList = false;
  markActive = false;
  public currentBusinessUnit: any = null;
  public businessEntitiesDetails: Array<any> = [
    {
      'Entity_Id': 1,
      'Org_Name': 'ABC',
      'Address_Details': {
        'Address': 'Sec-142',
        'Address_Type': 'Internal',
        'City': 'Abohar',
        'Country': 'Austria',
        'District': 'AD',
        'State': 'Uttar Pradesh',
        'Zip': '474006',
      },
      'bUnitName': 'A', 'bUnitCode': '10', 'bDivisionName': 'P', 'bDivisionCode': 'P10'
    },
    {
      'Entity_Id': 2,
      'Org_Name': 'XYZ',
      'Address_Details': {
        'Address': '',
        'Address_Type': 'Internal',
        'City': '',
        'Country': '',
        'District': '',
        'State': '',
        'Zip': '',
      },
      'bUnitName': 'X', 'bUnitCode': '11', 'bDivisionName': 'P', 'bDivisionCode': 'P11'
    },
    {
      'Entity_Id': 3,
      'Org_Name': 'PQR',
      'Address_Details': {
        'Address': '',
        'Address_Type': '',
        'City': '',
        'Country': '',
        'District': '',
        'State': '',
        'Zip': '',
      },
      'bUnitName': 'Y', 'bUnitCode': '12', 'bDivisionName': 'P', 'bDivisionCode': 'P12'
    }
  ];

  public allCountryList: Array<String> = [];
  public allCitiesList: Array<String> = [];
  public headers: any;
  public requestOptions: any;
  public toggleNav = true;
  public baseServiceUrl: any = 'http://172.16.16.40:7070/';
  constructor(private _http: Http,
    private router: Router) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.requestOptions = new RequestOptions({ headers: this.headers });

  }
  fetchData(serviceName) {
    return this._http.get(this.baseServiceUrl + serviceName);
  }
  postData(serviceName, params) {
    return this._http.post(this.baseServiceUrl + serviceName, params, this.requestOptions);
  }
  showHttpErrorMsg() {
    alert('Oops! Something went wrong while getting data from server.');
  }

  goToErrorPage() {
    this.toggleNav =  false;
    this.router.navigateByUrl('/error');
  }
}
