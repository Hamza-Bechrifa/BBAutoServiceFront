import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdreDeReparationAddComponent } from './ordre-de-reparation-add.component';

describe('OrdreDeReparationAddComponent', () => {
  let component: OrdreDeReparationAddComponent;
  let fixture: ComponentFixture<OrdreDeReparationAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdreDeReparationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreDeReparationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
