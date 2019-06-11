import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareManageComponent } from './firmware-manage.component';

describe('FirmwareManageComponent', () => {
  let component: FirmwareManageComponent;
  let fixture: ComponentFixture<FirmwareManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmwareManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
