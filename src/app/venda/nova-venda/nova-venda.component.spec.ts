import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaVendaComponent } from './nova-venda.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NovaVendaComponent', () => {
  let component: NovaVendaComponent;
  let fixture: ComponentFixture<NovaVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaVendaComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
