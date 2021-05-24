import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportControlComplianceComponent } from './export-control-compliance.component';

describe('ExportControlComplianceComponent', () => {
  let component: ExportControlComplianceComponent;
  let fixture: ComponentFixture<ExportControlComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportControlComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportControlComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
