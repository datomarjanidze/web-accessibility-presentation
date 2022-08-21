import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityExampleComponent } from './accessibility-example-container.component';

describe('AccessibilityExampleComponent', () => {
  let component: AccessibilityExampleComponent;
  let fixture: ComponentFixture<AccessibilityExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessibilityExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessibilityExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
