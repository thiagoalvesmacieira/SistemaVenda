import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProdutoDialogComponent } from './buscar-produto-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BuscarProdutoDialogComponent', () => {
  let component: BuscarProdutoDialogComponent;
  let fixture: ComponentFixture<BuscarProdutoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarProdutoDialogComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarProdutoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
