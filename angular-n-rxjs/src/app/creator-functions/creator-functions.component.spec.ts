import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorFunctionsComponent } from './creator-functions.component';

describe('CreatorFunctionsComponent', () => {
  let component: CreatorFunctionsComponent;
  let fixture: ComponentFixture<CreatorFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
