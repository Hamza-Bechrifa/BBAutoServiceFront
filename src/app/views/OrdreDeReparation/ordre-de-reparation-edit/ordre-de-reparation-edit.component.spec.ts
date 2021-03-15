import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdreDeReparationEditComponent } from './ordre-de-reparation-edit.component';

describe('OrdreDeReparationEditComponent', () => {
  let component: OrdreDeReparationEditComponent;
  let fixture: ComponentFixture<OrdreDeReparationEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdreDeReparationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreDeReparationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
