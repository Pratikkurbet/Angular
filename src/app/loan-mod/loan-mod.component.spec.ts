import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanModComponent } from './loan-mod.component';

describe('LoanModComponent', () => {
  let component: LoanModComponent;
  let fixture: ComponentFixture<LoanModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
