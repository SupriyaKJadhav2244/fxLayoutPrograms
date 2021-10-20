import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexlayoutgapComponent } from './flexlayoutgap.component';

describe('FlexlayoutgapComponent', () => {
  let component: FlexlayoutgapComponent;
  let fixture: ComponentFixture<FlexlayoutgapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexlayoutgapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexlayoutgapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
