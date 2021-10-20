import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxflexorderComponent } from './fxflexorder.component';

describe('FxflexorderComponent', () => {
  let component: FxflexorderComponent;
  let fixture: ComponentFixture<FxflexorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxflexorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxflexorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
