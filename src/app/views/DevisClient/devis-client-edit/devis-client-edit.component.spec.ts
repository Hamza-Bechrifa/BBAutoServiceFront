import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisClientEditComponent } from './devis-client-edit.component';

describe('DevisClientEditComponent', () => {
  let component: DevisClientEditComponent;
  let fixture: ComponentFixture<DevisClientEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisClientEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisClientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
