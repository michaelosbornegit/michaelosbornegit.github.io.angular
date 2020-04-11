import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlebarComponentComponent } from './titlebar-component.component';

describe('TitlebarComponentComponent', () => {
  let component: TitlebarComponentComponent;
  let fixture: ComponentFixture<TitlebarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlebarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlebarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
