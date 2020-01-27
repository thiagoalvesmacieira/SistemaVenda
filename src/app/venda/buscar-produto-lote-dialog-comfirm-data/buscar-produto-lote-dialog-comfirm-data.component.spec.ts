import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProdutoLoteDialogComfirmDataComponent } from './buscar-produto-lote-dialog-comfirm-data.component';

describe('BuscarProdutoLoteDialogComfirmDataComponent', () => {
  let component: BuscarProdutoLoteDialogComfirmDataComponent;
  let fixture: ComponentFixture<BuscarProdutoLoteDialogComfirmDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarProdutoLoteDialogComfirmDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarProdutoLoteDialogComfirmDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
