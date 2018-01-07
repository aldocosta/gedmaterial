import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GedgridComponent } from './gedgrid.component';

describe('GedgridComponent', () => {
  let component: GedgridComponent;
  let fixture: ComponentFixture<GedgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GedgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GedgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
