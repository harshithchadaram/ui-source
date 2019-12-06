import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableParentComponent } from './datatable-parent.component';

describe('DatatableParentComponent', () => {
  let component: DatatableParentComponent;
  let fixture: ComponentFixture<DatatableParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
