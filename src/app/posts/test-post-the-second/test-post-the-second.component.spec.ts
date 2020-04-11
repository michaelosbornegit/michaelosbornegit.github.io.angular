import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPostTheSecondComponent } from './test-post-the-second.component';

describe('TestPostTheSecondComponent', () => {
  let component: TestPostTheSecondComponent;
  let fixture: ComponentFixture<TestPostTheSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPostTheSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPostTheSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
