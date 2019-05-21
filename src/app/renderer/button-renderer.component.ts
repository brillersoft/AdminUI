import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-renderer',
  template: `
    <div style="text-align: center"><button type="button" style="height: 20px;
    line-height: 0.5" (click)="onClick($event)" class="btn btn-primary">OPEN</button></div>`
})

export class ButtonRendererComponent implements ICellRendererAngularComp {
  params;

  agInit(params): void {
    this.params = params;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        rowData: this.params.node.data
      };
      this.params.onClick(params);

    }
  }
}
