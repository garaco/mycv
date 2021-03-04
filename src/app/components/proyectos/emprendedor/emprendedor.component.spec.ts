import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendedorComponent } from './emprendedor.component';

describe('EmprendedorComponent', () => {
  let component: EmprendedorComponent;
  let fixture: ComponentFixture<EmprendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
