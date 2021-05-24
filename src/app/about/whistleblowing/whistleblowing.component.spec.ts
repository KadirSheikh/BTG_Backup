import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhistleblowingComponent } from './whistleblowing.component';

describe('WhistleblowingComponent', () => {
  let component: WhistleblowingComponent;
  let fixture: ComponentFixture<WhistleblowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhistleblowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhistleblowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
