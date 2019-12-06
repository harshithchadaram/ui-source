// Author: T4professor

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-button-renderer',
  templateUrl: './button-renderer.component.html',
  styleUrls: ['./button-renderer.component.scss']
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  getUrl() {
    console.log(this.label);
    return "'url(../../assets/'" + this.label + ".png)'";
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        node: this.params.node,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }
}