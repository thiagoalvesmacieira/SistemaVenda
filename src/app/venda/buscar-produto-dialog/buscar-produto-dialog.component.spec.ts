import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProdutoDialogComponent } from './buscar-produto-dialog.component';

describe('BuscarProdutoDialogComponent', () => {
  let component: BuscarProdutoDialogComponent;
  let fixture: ComponentFixture<BuscarProdutoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarProdutoDialogComponent ]
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
