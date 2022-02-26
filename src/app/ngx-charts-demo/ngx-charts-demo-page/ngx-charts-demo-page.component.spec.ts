import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartsDemoPageComponent } from './ngx-charts-demo-page.component';

describe('NgxChartsDemoPageComponent', () => {
  let component: NgxChartsDemoPageComponent;
  let fixture: ComponentFixture<NgxChartsDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxChartsDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartsDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
