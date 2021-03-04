import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremasComponent } from './premas.component';

describe('PremasComponent', () => {
  let component: PremasComponent;
  let fixture: ComponentFixture<PremasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
