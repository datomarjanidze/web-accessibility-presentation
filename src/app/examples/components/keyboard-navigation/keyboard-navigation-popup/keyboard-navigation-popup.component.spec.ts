import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardNavigationPopupComponent } from './keyboard-navigation-popup.component';

describe('KeyboardNavigationPopupComponent', () => {
  let component: KeyboardNavigationPopupComponent;
  let fixture: ComponentFixture<KeyboardNavigationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardNavigationPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardNavigationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
