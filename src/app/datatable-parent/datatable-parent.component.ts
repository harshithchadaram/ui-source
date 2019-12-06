import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable-parent',
  templateUrl: './datatable-parent.component.html',
  styleUrls: ['./datatable-parent.component.scss']
})
export class DatatableParentComponent implements OnInit {
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  slctdRowData = [];
  constructor() { }

  ngOnInit() {
  }

  pushRows(rows) {
    // console.log(rows);
    this.slctdRowData.push(rows);
  }

}
