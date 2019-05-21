import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    licence_Type: any;
    constructor(private spinner: NgxSpinnerService) {
        this.setlicenceType();
    }

    showSpinner() {
        this.spinner.show();
    }

    hideSpinner() {
        this.spinner.hide();
    }

    autoHideSpinner(time: any) {
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after given time */
            this.spinner.hide();
        }, time);
    }

    getLicenceType() {
        this.licence_Type = localStorage.getItem('type');
    }

    setlicenceType() {
        localStorage.setItem('type', 'all');
    }
}
