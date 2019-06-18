import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionManageComponent } from './action-manage.component';

describe('ActionManageComponent', () => {
  let component: ActionManageComponent;
  let fixture: ComponentFixture<ActionManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
