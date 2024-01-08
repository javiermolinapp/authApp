import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerPageComponent } from './registrer-page.component';

describe('RegistrerPageComponent', () => {
  let component: RegistrerPageComponent;
  let fixture: ComponentFixture<RegistrerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrerPageComponent]
    });
    fixture = TestBed.createComponent(RegistrerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
