import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexoffsetComponent } from './flexoffset.component';

describe('FlexoffsetComponent', () => {
  let component: FlexoffsetComponent;
  let fixture: ComponentFixture<FlexoffsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexoffsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexoffsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
