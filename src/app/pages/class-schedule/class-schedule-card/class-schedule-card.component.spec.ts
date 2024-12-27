import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassScheduleCardComponent } from './class-schedule-card.component';

describe('ClassScheduleCardComponent', () => {
  let component: ClassScheduleCardComponent;
  let fixture: ComponentFixture<ClassScheduleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassScheduleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassScheduleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
