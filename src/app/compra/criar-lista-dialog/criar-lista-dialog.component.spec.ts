import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarListaDialogComponent } from './criar-lista-dialog.component';

describe('CriarListaDialogComponent', () => {
  let component: CriarListaDialogComponent;
  let fixture: ComponentFixture<CriarListaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarListaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarListaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
