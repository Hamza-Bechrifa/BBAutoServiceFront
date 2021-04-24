import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisClientShowComponent } from './devis-client-show.component';

describe('DevisClientShowComponent', () => {
  let component: DevisClientShowComponent;
  let fixture: ComponentFixture<DevisClientShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisClientShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisClientShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
