import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSubCatagoryComponent } from './sub-sub-catagory.component';

describe('SubSubCatagoryComponent', () => {
  let component: SubSubCatagoryComponent;
  let fixture: ComponentFixture<SubSubCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSubCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSubCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
