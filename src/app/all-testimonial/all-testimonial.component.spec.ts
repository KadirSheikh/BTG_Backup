import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestimonialComponent } from './all-testimonial.component';

describe('AllTestimonialComponent', () => {
  let component: AllTestimonialComponent;
  let fixture: ComponentFixture<AllTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
