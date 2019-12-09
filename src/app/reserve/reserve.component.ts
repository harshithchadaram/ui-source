import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {
  rowData = [];
  constructor() { }

  ngOnInit() {
    this.rowData = history.state.data;
    console.log(history.state.data);
  }

}
