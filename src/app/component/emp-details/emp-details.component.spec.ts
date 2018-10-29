import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailsComponent } from './emp-details.component';

describe('EmpDetailsComponent', () => {
  let component: EmpDetailsComponent;
  let fixture: ComponentFixture<EmpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});