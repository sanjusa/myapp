import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomformComponent } from './customform.component';

describe('CustomformComponent', () => {
  let component: CustomformComponent;
  let fixture: ComponentFixture<CustomformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
