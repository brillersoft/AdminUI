import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  constructor(public _CommonService: CommonService) { }

  ngOnInit() {
  }

  openSideNav() {
    if (!this._CommonService.isServerError) {
      this._CommonService.toggleNav = !this._CommonService.toggleNav;
    } else {
      this._CommonService.toggleNav = false;
    }
  }

}
