import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFornecedorDialogComponent } from './buscar-fornecedor-dialog.component';

describe('BuscarFornecedorDialogComponent', () => {
  let component: BuscarFornecedorDialogComponent;
  let fixture: ComponentFixture<BuscarFornecedorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarFornecedorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarFornecedorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
