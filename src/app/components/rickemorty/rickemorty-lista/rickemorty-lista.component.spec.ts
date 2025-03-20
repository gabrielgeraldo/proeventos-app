/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RickemortyListaComponent } from './rickemorty-lista.component';

describe('RickemortyListaComponent', () => {
  let component: RickemortyListaComponent;
  let fixture: ComponentFixture<RickemortyListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickemortyListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickemortyListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
