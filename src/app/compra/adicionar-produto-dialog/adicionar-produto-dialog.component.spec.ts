import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProdutoDialogComponent } from './adicionar-produto-dialog.component';

describe('AdicionarProdutoDialogComponent', () => {
  let component: AdicionarProdutoDialogComponent;
  let fixture: ComponentFixture<AdicionarProdutoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarProdutoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarProdutoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
