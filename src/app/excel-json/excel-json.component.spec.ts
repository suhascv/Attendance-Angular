import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelJSONComponent } from './excel-json.component';

describe('ExcelJSONComponent', () => {
  let component: ExcelJSONComponent;
  let fixture: ComponentFixture<ExcelJSONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelJSONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
