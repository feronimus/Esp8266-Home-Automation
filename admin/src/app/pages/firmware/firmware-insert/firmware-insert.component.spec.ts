import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareInsertComponent } from './firmware-insert.component';

describe('FirmwareInsertComponent', () => {
  let component: FirmwareInsertComponent;
  let fixture: ComponentFixture<FirmwareInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmwareInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
