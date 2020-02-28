import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formselec2Component } from './formselec2.component';

describe('Formselec2Component', () => {
  let component: Formselec2Component;
  let fixture: ComponentFixture<Formselec2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formselec2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formselec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
