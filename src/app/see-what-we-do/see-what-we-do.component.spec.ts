import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeWhatWeDoComponent } from './see-what-we-do.component';

describe('SeeWhatWeDoComponent', () => {
  let component: SeeWhatWeDoComponent;
  let fixture: ComponentFixture<SeeWhatWeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeWhatWeDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeWhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
