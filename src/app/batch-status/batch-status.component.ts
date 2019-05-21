import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-batch-status',
  templateUrl: './batch-status.component.html'
})
export class BatchStatusComponent implements OnInit {
  batchRunDetailsArray: Array<any> = [];
  constructor(private commonService: CommonService) { }
  allConfig: any;
  pipe = new DatePipe('en-US');

  columnDefs = [
    { headerName: 'BatchId', field: 'batchId' },
    { headerName: 'Total Mails Procced', field: 'totalMailsProceed' },
    { headerName: 'Time Taken', field: 'timeTaken' },
    { headerName: 'Failed Mails', field: 'failedMail' },
    { headerName: 'Run Time', field: 'runOn' },
    { headerName: 'Next Run Time', field: 'nextTrigger' }
  ];

  tempRes: Array<any> = [
    {
      'timeTaken': '12.7', 'totalMailsProceed': '35', 'nextTrigger': this.pipe.transform(new Date('2019-04-09 14:00:00'), 'short'),
      'runOn': this.pipe.transform(new Date('2019-04-08 14:13:00'), 'short'), 'failedMail': '3', 'batchId': '1'
    },
    {
      'timeTaken': '13.2', 'totalMailsProceed': '35', 'nextTrigger': this.pipe.transform(new Date('2019-04-10 00:00:00'), 'short'),
      'runOn': this.pipe.transform(new Date('2019-04-08 16:02:08'), 'short'), 'failedMail': '3', 'batchId': '2'
    },
    {
      'timeTaken': '11.3', 'totalMailsProceed': '35', 'nextTrigger': this.pipe.transform(new Date('2019-04-11 00:00:00'), 'short'),
      'runOn': this.pipe.transform(new Date('2019-04-08 16:30:24'), 'short'), 'failedMail': '3', 'batchId': '3'
    }
  ];

  ngOnInit() {
    // this.commonService.fetchData('getBatchStatus').subscribe(res => {
    //   if (res) {
    //     const data = res.json();
    //     this.batchRunDetailsArray = data;
    //     console.log(this.batchRunDetailsArray);
    //   }
    // });
    this.batchRunDetailsArray = this.tempRes;
  }

}
