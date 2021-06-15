import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewsEventComponent } from './single-news-event.component';

describe('SingleNewsEventComponent', () => {
  let component: SingleNewsEventComponent;
  let fixture: ComponentFixture<SingleNewsEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNewsEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNewsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
