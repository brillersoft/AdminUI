import { Component, OnInit } from '@angular/core';
import { CronOptions } from 'ngx-cron-editor/CronOptions';

import { CommonService } from '../common.service';
import { UtilService } from '../util.service';
@Component({
  selector: 'app-batch-scheduler',
  templateUrl: './batch-scheduler.component.html'
})
export class BatchSchedulerComponent implements OnInit {

  cronExpression: any;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',
    defaultTime: '00:00:00',
    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: true,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab: false,
    use24HourTime: true,
    hideSeconds: false,
    cronFlavor: 'quartz' // standard or quartz
  };
  allConfig: any = [{ 'Is_Cron_Job': true, 'Is_Active': true, 'Job_group': 'Test Group', 'Job_Name': 'Sample Cron Job', 'Cron_Expres': '0 0/2 * ? * *', 'Batch_Id': 10 }, { 'Is_Cron_Job': null, 'Is_Active': true, 'Job_group': null, 'Job_Name': null, 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': true, 'Is_Active': true, 'Job_group': 'Non cron job', 'Job_Name': 'Forced run', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': '3453543', 'Job_Name': 'asdas', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': true, 'Is_Active': true, 'Job_group': 'cron', 'Job_Name': 'test cron', 'Cron_Expres': '0 0 0 ? 1/1 SUN#1 *', 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': null, 'Job_Name': null, 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': 'qwewqewq', 'Job_Name': 'asd', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': true, 'Is_Active': true, 'Job_group': null, 'Job_Name': null, 'Cron_Expres': '0 0/1 * 1/1 * ? *', 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': 'Test Job Group', 'Job_Name': 'Test cron Job', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': true, 'Is_Active': true, 'Job_group': 'group', 'Job_Name': 'test new', 'Cron_Expres': '13 12 6 ? * MON,TUE,WED,THU,FRI,SAT,SUN *', 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': 'Test Job Group', 'Job_Name': 'Test cron Job', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': 'Test Job Group', 'Job_Name': 'Test cron Job', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': 'Test Job Group', 'Job_Name': 'Test cron Job', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': 'Test Job Group', 'Job_Name': 'Test cron Job', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': 'Test Job Group', 'Job_Name': 'Test cron Job', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': 'tst job', 'Job_Name': 'test', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': 'Test Job Group', 'Job_Name': 'Test cron Job', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': 'Test Job Group', 'Job_Name': 'Test cron Job', 'Cron_Expres': null, 'Batch_Id': 10 }, { 'Is_Cron_Job': false, 'Is_Active': true, 'Job_group': 'Test Job Group', 'Job_Name': 'Test cron Job', 'Cron_Expres': null, 'Batch_Id': 10 }];

  params: any = {};
  requestParam: any = {};
  columnDefs = [
    {
      headerName: 'Job Type', field: 'Is_Cron_Job', cellRenderer: function (params) {
        if (params.value) {
          return 'Schedule Job';
        } else {
          return 'Historical Job';
        }

      }, sortable: true
    },
    { headerName: 'Job Group', field: 'Job_group', filter: 'agTextColumnFilter', sortable: true, editable: true },
    { headerName: 'Job Name', field: 'Job_Name', filter: 'agTextColumnFilter', sortable: true, editable: true },
    { headerName: 'Cron Expression', field: 'Cron_Expres', filter: 'agTextColumnFilter', sortable: true, editable: true },
    { headerName: 'Batch Id', field: 'Batch_Id', filter: 'agNumberColumnFilter', sortable: true, editable: true },
    {
      headerName: 'Actions', cellRenderer: function (params) {
        return ' <label class="switch"><input type="checkbox" checked><span class="slider round"></span></label><i class="far fa-trash-alt"></i>';

      }
    }
  ];
  constructor(private _commonService: CommonService, private utilService: UtilService) {
    this.requestParam.Is_Cron_Job = 'true';
  }

  ngOnInit() {

    this.fetchJobs();
  }
  fetchJobs() {
    this.utilService.showSpinner();
    this._commonService.fetchData('getAllScheduledJobs').subscribe(data => {
      this.allConfig = data.json();
      this.utilService.hideSpinner();
    }, err => {
      this.utilService.hideSpinner();
      this._commonService.showHttpErrorMsg();
      this._commonService.goToErrorPage();
    });
  }
  runJob() {
    if (this.requestParam.Is_Cron_Job === 'true') {
      this.requestParam.Cron_Expres = this.cronExpression;
    }
    this.requestParam.Batch_Id = '10';
    this.params = {
      'requestType': '',
      'requestParam': this.requestParam
    };

    console.log(this.requestParam);
    this.utilService.showSpinner();
    this._commonService.postData('scheduleJobs', this.params).subscribe(data => {
      this.fetchJobs();
      this.requestParam = {};
      this.requestParam.Is_Cron_Job = 'true';
      this.utilService.hideSpinner();
    }, err => {
      this.utilService.hideSpinner();
      this._commonService.showHttpErrorMsg();
      this._commonService.goToErrorPage();
    });
  }

}
