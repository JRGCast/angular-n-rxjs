import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatenningOperatorsComponent } from './flatenning-operators.component';

describe('FlatenningOperatorsComponent', () => {
  let component: FlatenningOperatorsComponent;
  let fixture: ComponentFixture<FlatenningOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatenningOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatenningOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
