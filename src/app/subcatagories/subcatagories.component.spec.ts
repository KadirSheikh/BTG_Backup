import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatagoriesComponent } from './subcatagories.component';

describe('SubcatagoriesComponent', () => {
  let component: SubcatagoriesComponent;
  let fixture: ComponentFixture<SubcatagoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatagoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
