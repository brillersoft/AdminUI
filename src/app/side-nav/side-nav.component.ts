import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent implements OnInit {
  constructor(private router: Router, private location: Location, public _commonServices: CommonService) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      const route = this.location.path();
      if (route === '/org-config/new' || route === '/org-config/existing-list') {
        this._commonServices.showSubList = true;
      }
      if (route === '/error') {
        this._commonServices.toggleNav = false;
      }
    });
  }

  showSubListMenu() {
    if (this._commonServices.showSubList === false) {
      this._commonServices.markActive = true;
      this._commonServices.showSubList = true;
      this.router.navigateByUrl('/org-config/new');
    } else {
      this._commonServices.showSubList = false;
    }
  }
  removeActive() {
    this._commonServices.markActive = false;
  }

  hideSubList() {
    this._commonServices.showSubList = false;
  }

}
