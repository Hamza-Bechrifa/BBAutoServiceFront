import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdreDeReparationListComponent } from './ordre-de-reparation-list.component';

describe('OrdreDeReparationListComponent', () => {
  let component: OrdreDeReparationListComponent;
  let fixture: ComponentFixture<OrdreDeReparationListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdreDeReparationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreDeReparationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
