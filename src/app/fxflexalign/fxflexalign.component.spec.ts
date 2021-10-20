import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxflexalignComponent } from './fxflexalign.component';

describe('FxflexalignComponent', () => {
  let component: FxflexalignComponent;
  let fixture: ComponentFixture<FxflexalignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxflexalignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxflexalignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
