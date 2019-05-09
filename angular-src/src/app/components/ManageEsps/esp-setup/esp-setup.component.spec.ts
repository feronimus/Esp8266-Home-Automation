import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspSetupComponent } from './esp-setup.component';

describe('EspSetupComponent', () => {
  let component: EspSetupComponent;
  let fixture: ComponentFixture<EspSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
