import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrodepartamentoComponent } from './cadastrodepartamento.component';

describe('CadastrodepartamentoComponent', () => {
  let component: CadastrodepartamentoComponent;
  let fixture: ComponentFixture<CadastrodepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrodepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrodepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
