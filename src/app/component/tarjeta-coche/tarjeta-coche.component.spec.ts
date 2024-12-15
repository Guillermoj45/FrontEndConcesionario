import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TarjetaCocheComponent } from './tarjeta-coche.component';

describe('TarjetaCocheComponent', () => {
  let component: TarjetaCocheComponent;
  let fixture: ComponentFixture<TarjetaCocheComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TarjetaCocheComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
