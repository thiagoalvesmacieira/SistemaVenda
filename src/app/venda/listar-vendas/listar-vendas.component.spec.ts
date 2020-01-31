import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVendasComponent } from './listar-vendas.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('ListarVendasComponent', () => {
  let component: ListarVendasComponent;
  let fixture: ComponentFixture<ListarVendasComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarVendasComponent ],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
