import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployePresentComponent } from './employe-present.component';

describe('EmployePresentComponent', () => {
  let component: EmployePresentComponent;
  let fixture: ComponentFixture<EmployePresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployePresentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployePresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
