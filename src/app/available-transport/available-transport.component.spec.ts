import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTransportComponent } from './available-transport.component';

describe('AvailableTransportComponent', () => {
  let component: AvailableTransportComponent;
  let fixture: ComponentFixture<AvailableTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
