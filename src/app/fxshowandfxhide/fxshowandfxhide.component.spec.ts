import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxshowandfxhideComponent } from './fxshowandfxhide.component';

describe('FxshowandfxhideComponent', () => {
  let component: FxshowandfxhideComponent;
  let fixture: ComponentFixture<FxshowandfxhideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxshowandfxhideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxshowandfxhideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
