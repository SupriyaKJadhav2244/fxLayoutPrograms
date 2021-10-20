import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxlayoutalignComponent } from './fxlayoutalign.component';

describe('FxlayoutalignComponent', () => {
  let component: FxlayoutalignComponent;
  let fixture: ComponentFixture<FxlayoutalignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxlayoutalignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxlayoutalignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
