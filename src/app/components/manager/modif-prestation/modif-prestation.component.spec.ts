import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPrestationComponent } from './modif-prestation.component';

describe('ModifPrestationComponent', () => {
  let component: ModifPrestationComponent;
  let fixture: ComponentFixture<ModifPrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifPrestationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
