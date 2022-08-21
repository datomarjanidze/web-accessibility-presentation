import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaLandmarksComponent } from './aria-landmarks.component';

describe('AriaLandmarksComponent', () => {
  let component: AriaLandmarksComponent;
  let fixture: ComponentFixture<AriaLandmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AriaLandmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AriaLandmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
