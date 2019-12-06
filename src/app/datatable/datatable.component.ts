import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter, Input, AfterContentChecked, ChangeDetectorRef, OnChanges } from '@angular/core';
import { ButtonRendererComponent } from '../button-renderer/button-renderer.component';
import { GridOptions } from 'ag-grid-community';
import * as _ from 'lodash';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  slctdRowData = [];
  private gridApi;
  private gridColumnApi;
  private gridOptions: GridOptions;
  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};

  columnDefs;
  slctdColumnDefs;
  // @Input('rowData') rowData;
  @Output() getData = new EventEmitter();

  constructor(private ref: ChangeDetectorRef) {
    this.gridOptions = <GridOptions>{};

    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
    this.columnDefs = [
      {
        headerName: '', field: '', width: 40,
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.addRow.bind(this),
          label: 'add'
        },
        cellStyle: {
          top: '2px', left: '25px', padding: 'unset'
        }
      },
      { headerName: 'Make', field: 'make', width: 100 },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ];

    this.slctdColumnDefs = [
      {
        headerName: '', field: '', width: 40,
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.deleteRow.bind(this),
          label: 'delete'
        },
        cellStyle: {
          top: '2px', left: '25px', padding: 'unset'
        }
      },
      { headerName: 'Make', field: 'make', width: 100 },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ];

  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  deleteRow(e) {
    // var selectedData = this.gridOptions.api.getDisplayedRowAtIndex(this.gridOptions.api.getSelectedNodes);
    console.log(e);
    this.gridOptions.api.removeItems([e.node], true)
  }
  addRow(e) {
    this.gridOptions.api.updateRowData({ add: [e.rowData] });
    this.gridOptions.api.redrawRows();
  }
  ngOnInit() {

  }

  // selectRows(ind) {
  //   this.getData.emit(this.rows[ind]);
  //   // console.log(this.rows[ind]);
  // }

}
