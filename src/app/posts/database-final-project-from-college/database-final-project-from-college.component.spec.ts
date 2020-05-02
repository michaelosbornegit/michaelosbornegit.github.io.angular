import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseFinalProjectFromCollegeComponent } from './database-final-project-from-college.component';

describe('DatabaseFinalProjectFromCollegeComponent', () => {
  let component: DatabaseFinalProjectFromCollegeComponent;
  let fixture: ComponentFixture<DatabaseFinalProjectFromCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseFinalProjectFromCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseFinalProjectFromCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
