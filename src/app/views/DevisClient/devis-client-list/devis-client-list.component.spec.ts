import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisClientListComponent } from './devis-client-list.component';

describe('DevisClientListComponent', () => {
  let component: DevisClientListComponent;
  let fixture: ComponentFixture<DevisClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
