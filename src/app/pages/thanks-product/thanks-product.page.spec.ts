import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksProductPage } from './thanks-product.page';

describe('ThanksProductPage', () => {
  let component: ThanksProductPage;
  let fixture: ComponentFixture<ThanksProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanksProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
