import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWeCardComponent } from './why-we-card.component';

describe('WhyWeCardComponent', () => {
  let component: WhyWeCardComponent;
  let fixture: ComponentFixture<WhyWeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyWeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
