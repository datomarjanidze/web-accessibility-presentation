import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAltTextComponent } from './image-alt-text.component';

describe('ImageAltTextComponent', () => {
  let component: ImageAltTextComponent;
  let fixture: ComponentFixture<ImageAltTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAltTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAltTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
