import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspManageComponent } from './esp-manage.component';

describe('EspManageComponent', () => {
  let component: EspManageComponent;
  let fixture: ComponentFixture<EspManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
