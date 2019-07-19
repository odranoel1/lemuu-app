import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksRecoveryPasswordPage } from './thanks-recovery-password.page';

describe('ThanksRecoveryPasswordPage', () => {
  let component: ThanksRecoveryPasswordPage;
  let fixture: ComponentFixture<ThanksRecoveryPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanksRecoveryPasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksRecoveryPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
