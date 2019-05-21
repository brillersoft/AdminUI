import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
  constructor(private commonService: CommonService) { }

  ngOnInit() {
      this.commonService.isServerError = true;
  }
}
