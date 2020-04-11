import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinstripeCardComponent } from './pinstripe-card.component';

describe('PinstripeCardComponent', () => {
  let component: PinstripeCardComponent;
  let fixture: ComponentFixture<PinstripeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinstripeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinstripeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
