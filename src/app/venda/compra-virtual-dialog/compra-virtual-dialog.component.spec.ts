import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraVirtualDialogComponent } from './compra-virtual-dialog.component';

describe('CompraVirtualDialogComponent', () => {
  let component: CompraVirtualDialogComponent;
  let fixture: ComponentFixture<CompraVirtualDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraVirtualDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraVirtualDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
