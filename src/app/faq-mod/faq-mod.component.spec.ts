import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqModComponent } from './faq-mod.component';

describe('FaqModComponent', () => {
  let component: FaqModComponent;
  let fixture: ComponentFixture<FaqModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
