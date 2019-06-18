import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionInsertComponent } from './action-insert.component';

describe('ActionInsertComponent', () => {
  let component: ActionInsertComponent;
  let fixture: ComponentFixture<ActionInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
