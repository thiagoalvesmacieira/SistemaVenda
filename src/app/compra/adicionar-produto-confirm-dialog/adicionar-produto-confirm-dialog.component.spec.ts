import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProdutoConfirmDialogComponent } from './adicionar-produto-confirm-dialog.component';

describe('AdicionarProdutoConfirmDialogComponent', () => {
  let component: AdicionarProdutoConfirmDialogComponent;
  let fixture: ComponentFixture<AdicionarProdutoConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarProdutoConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarProdutoConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
