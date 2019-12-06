import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterContentChecked, DoCheck, OnChanges, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ButtonRendererComponent } from '../button-renderer/button-renderer.component';

@Component({
  selector: 'app-selected-datatable',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './selected-datatable.component.html',
  styleUrls: ['./selected-datatable.component.scss']
})
export class SelectedDatatableComponent implements OnInit {
  ngAfterViewChecked(): void {

    // setInterval(() => {
    //   this.ref.detectChanges();
    // }, 5000);
  }
  ngAfterViewInit(): void {

  }
  ngAfterContentInit(): void {
    // this.ref.detach();
    // setInterval(() => {
    //   this.ref.detectChanges();
    // }, 5000);
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    // this.ref.detach();
    // setInterval(() => {
    //   this.ref.detectChanges();
    // }, 5000);
  }
  ngDoCheck(): void {
    // this.ref.detach();
    // setInterval(() => {
    //   this.ref.detectChanges();
    // }, 5000);
  }
  ngAfterContentChecked(): void {
    // console.log(this.rows);

  }
  // rows = [
  //   { id: '0001', serial_number: '31234aaa' },
  //   { id: '0002', serial_number: '214124bbb' },
  //   { id: '0003', serial_number: '2142413xxx' },
  // ];
  frameworkComponents: any;
  rowDataClicked1 = {};
  private gridApi;
  private gridColumnApi;
  constructor(private ref: ChangeDetectorRef) {
    // ref.detach();
    // setInterval(() => {
    //   this.ref.detectChanges();
    // }, 5000);

    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
    this.columnDefs = [
      {
        headerName: '', field: '', width: 30,
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onBtnClick1.bind(this),
          label: ''
        },
        cellStyle: { top: '2px', left: '9px' }
      },
      { headerName: 'Make', field: 'make', width: 100 },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ];
  }
  columnDefs;

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
    console.log(e.rowData);
  }

}
