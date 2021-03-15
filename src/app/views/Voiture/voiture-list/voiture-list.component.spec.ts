import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VoitureListComponent } from './voiture-list.component';

describe('VoitureListComponent', () => {
  let component: VoitureListComponent;
  let fixture: ComponentFixture<VoitureListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
