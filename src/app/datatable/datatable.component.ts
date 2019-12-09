import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter, Input, AfterContentChecked, ChangeDetectorRef, OnChanges } from '@angular/core';
import { ButtonRendererComponent } from '../button-renderer/button-renderer.component';
import { GridOptions } from 'ag-grid-community';
import * as _ from 'lodash';
import { SelectedDatatableComponent } from '../selected-datatable/selected-datatable.component';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  rowData = [];
  private gridApi;
  private gridColumnApi;
  private slctdGridApi;
  private slctdGridColumnApi;
  private gridOptions: GridOptions;
  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};
  @Output() sendRows = new EventEmitter();
  columnDefs;
  slctdColumnDefs;
  // @Input('rowData') rowData;
  @Output() getData = new EventEmitter();
  @Input('showRooms') showRooms = true;
  @Input('selectedData') selectedData = [];

  constructor(private ref: ChangeDetectorRef) {
    this.gridOptions = <GridOptions>{};
    if (history.state.data) {
      this.rowData = history.state.data;
    }

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
  onSelectedGridReady(params) {
    this.slctdGridApi = params.api;
    this.slctdGridColumnApi = params.columnApi;
  }
  deleteRow(e) {
    // var selectedData = this.gridOptions.api.getDisplayedRowAtIndex(this.gridOptions.api.getSelectedNodes);
    console.log(e);
    this.gridOptions.api.removeItems([e.node], true);
    this.sendRowData();
  }
  addRow(e) {
    this.gridOptions.api.updateRowData({ add: [e.rowData] });
    this.gridOptions.api.redrawRows();
    this.sendRowData();
  }
  sendRowData() {
    let rowData = [];
    this.slctdGridApi.forEachNode(node => rowData.push(node.data));
    this.sendRows.emit(rowData);
  }
  ngOnInit() {

  }

  // selectRows(ind) {
  //   this.getData.emit(this.rows[ind]);
  //   // console.log(this.rows[ind]);
  // }

}
