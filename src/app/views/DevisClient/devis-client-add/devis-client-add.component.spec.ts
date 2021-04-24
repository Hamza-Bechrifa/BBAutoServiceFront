import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisClientAddComponent } from './devis-client-add.component';

describe('DevisClientAddComponent', () => {
  let component: DevisClientAddComponent;
  let fixture: ComponentFixture<DevisClientAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisClientAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisClientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
