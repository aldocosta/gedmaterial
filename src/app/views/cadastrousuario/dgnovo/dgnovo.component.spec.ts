import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgnovoComponent } from './dgnovo.component';

describe('DgnovoComponent', () => {
  let component: DgnovoComponent;
  let fixture: ComponentFixture<DgnovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgnovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgnovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
