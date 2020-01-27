import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarClienteDialogComponent } from './buscar-cliente-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BuscarClienteDialogComponent', () => {

  let component: BuscarClienteDialogComponent;
  let fixture: ComponentFixture<BuscarClienteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarClienteDialogComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarClienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve retornar a multiplicação', ()=>{
 
    
    
  });

  
});
