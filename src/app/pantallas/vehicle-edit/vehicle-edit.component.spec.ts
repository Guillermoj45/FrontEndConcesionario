import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VehicleEditComponent } from './vehicle-edit.component';

describe('VehicleEditComponent', () => {
  let component: VehicleEditComponent;
  let fixture: ComponentFixture<VehicleEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VehicleEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
