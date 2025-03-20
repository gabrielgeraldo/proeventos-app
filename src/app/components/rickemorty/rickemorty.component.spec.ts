/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RickemortyComponent } from './rickemorty.component';

describe('RickemortyComponent', () => {
  let component: RickemortyComponent;
  let fixture: ComponentFixture<RickemortyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickemortyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickemortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
