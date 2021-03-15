import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VoitureAddComponent } from './voiture-add.component';

describe('VoitureAddComponent', () => {
  let component: VoitureAddComponent;
  let fixture: ComponentFixture<VoitureAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
