import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formselec3Component } from './formselec3.component';

describe('Formselec3Component', () => {
  let component: Formselec3Component;
  let fixture: ComponentFixture<Formselec3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formselec3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formselec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
