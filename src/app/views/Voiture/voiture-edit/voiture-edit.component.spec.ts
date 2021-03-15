import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VoitureEditComponent } from './voiture-edit.component';

describe('VoitureEditComponent', () => {
  let component: VoitureEditComponent;
  let fixture: ComponentFixture<VoitureEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
