import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { IotAutomationComponent } from './iot-automation.component';

describe('IotAutomationComponent', () => {
  let component: IotAutomationComponent;
  let fixture: ComponentFixture<IotAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IotAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IotAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
