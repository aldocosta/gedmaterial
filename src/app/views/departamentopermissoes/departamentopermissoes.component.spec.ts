import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentopermissoesComponent } from './departamentopermissoes.component';


describe('DepartamentopermissoesComponent', () => {
  let component: DepartamentopermissoesComponent;
  let fixture: ComponentFixture<DepartamentopermissoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentopermissoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentopermissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
