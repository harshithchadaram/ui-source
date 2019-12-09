import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'angular-popup';
  data;
  slctdRowData = [];
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }
  search(event) {
    this.data = { name: 'gvg' };
    console.log(event);
    this.router.navigate(['/dashboard/', 'search-rooms'], { state: { data: this.rowData } });
  }
  getSelectedData(comp) {
    comp.sendRows.subscribe((data) => {
      console.log(data);
      this.slctdRowData = data;
    })
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  nextStep(event) {
    this.router.navigate(['/dashboard/', 'create-reservation'], { state: { data: this.slctdRowData } });
  }
  createReservation(event) {
    if (this.data) {
      if (this.data.name) {
        this.router.navigate(['/dashboard/', 'create-reservation'], { state: { data: history.state.data } });
      } else {
        this.modalService.open("please select a room first", { size: 'lg' });
      }
    } else {
      this.modalService.open("please select a room first", { size: 'lg' });
    }
  }
}
