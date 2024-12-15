import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TajetaVehiculoAdministrationComponent } from './tajeta-vehiculo-administration.component';

describe('TajetaVehiculoAdministrationComponent', () => {
  let component: TajetaVehiculoAdministrationComponent;
  let fixture: ComponentFixture<TajetaVehiculoAdministrationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TajetaVehiculoAdministrationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TajetaVehiculoAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
