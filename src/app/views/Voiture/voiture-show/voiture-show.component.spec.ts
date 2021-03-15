import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VoitureShowComponent } from './voiture-show.component';

describe('VoitureShowComponent', () => {
  let component: VoitureShowComponent;
  let fixture: ComponentFixture<VoitureShowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
