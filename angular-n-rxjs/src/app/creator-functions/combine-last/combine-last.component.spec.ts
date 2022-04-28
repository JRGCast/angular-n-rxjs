import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLastComponent } from './combine-last.component';

describe('CombineLastComponent', () => {
  let component: CombineLastComponent;
  let fixture: ComponentFixture<CombineLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
