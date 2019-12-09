import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProdutoLoteDialogComponent } from './buscar-produto-lote-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BuscarProdutoLoteDialogComponent', () => {
  let component: BuscarProdutoLoteDialogComponent;
  let fixture: ComponentFixture<BuscarProdutoLoteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarProdutoLoteDialogComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarProdutoLoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
