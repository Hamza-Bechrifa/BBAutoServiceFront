import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdreDeReparationShowComponent } from './ordre-de-reparation-show.component';

describe('OrdreDeReparationShowComponent', () => {
  let component: OrdreDeReparationShowComponent;
  let fixture: ComponentFixture<OrdreDeReparationShowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdreDeReparationShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreDeReparationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
