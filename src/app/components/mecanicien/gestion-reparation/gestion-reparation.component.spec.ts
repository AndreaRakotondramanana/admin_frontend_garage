import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReparationComponent } from './gestion-reparation.component';

describe('GestionReparationComponent', () => {
  let component: GestionReparationComponent;
  let fixture: ComponentFixture<GestionReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionReparationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
