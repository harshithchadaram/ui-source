import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDatatableComponent } from './selected-datatable.component';

describe('SelectedDatatableComponent', () => {
  let component: SelectedDatatableComponent;
  let fixture: ComponentFixture<SelectedDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
