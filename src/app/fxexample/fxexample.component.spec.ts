import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxexampleComponent } from './fxexample.component';

describe('FxexampleComponent', () => {
  let component: FxexampleComponent;
  let fixture: ComponentFixture<FxexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
