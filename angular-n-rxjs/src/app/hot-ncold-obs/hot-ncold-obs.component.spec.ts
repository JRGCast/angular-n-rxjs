import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotNColdObsComponent } from './hot-ncold-obs.component';

describe('HotNColdObsComponent', () => {
  let component: HotNColdObsComponent;
  let fixture: ComponentFixture<HotNColdObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotNColdObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotNColdObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
