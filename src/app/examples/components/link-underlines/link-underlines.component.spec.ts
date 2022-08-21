import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkUnderlinesComponent } from './link-underlines.component';

describe('LinkUnderlinesComponent', () => {
  let component: LinkUnderlinesComponent;
  let fixture: ComponentFixture<LinkUnderlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkUnderlinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkUnderlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
