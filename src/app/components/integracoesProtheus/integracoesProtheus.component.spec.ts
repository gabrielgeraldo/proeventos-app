/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntegracoesProtheusComponent } from './integracoesProtheus.component';

describe('IntegracoesProtheusComponent', () => {
  let component: IntegracoesProtheusComponent;
  let fixture: ComponentFixture<IntegracoesProtheusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegracoesProtheusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracoesProtheusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
