import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TajetaVehiculoAdminComponent } from './tajeta-vehiculo-admin.component';

describe('TajetaVehiculoAdminComponent', () => {
  let component: TajetaVehiculoAdminComponent;
  let fixture: ComponentFixture<TajetaVehiculoAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TajetaVehiculoAdminComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TajetaVehiculoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
