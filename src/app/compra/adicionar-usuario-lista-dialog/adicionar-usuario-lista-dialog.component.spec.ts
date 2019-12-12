import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarUsuarioListaDialogComponent } from './adicionar-usuario-lista-dialog.component';

describe('AdicionarUsuarioListaDialogComponent', () => {
  let component: AdicionarUsuarioListaDialogComponent;
  let fixture: ComponentFixture<AdicionarUsuarioListaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarUsuarioListaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarUsuarioListaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
