import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGarageComponent } from './gestion-garage.component';

describe('GestionGarageComponent', () => {
  let component: GestionGarageComponent;
  let fixture: ComponentFixture<GestionGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionGarageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
