import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BonDeReceptionShowComponent } from './bon-de-reception-show.component';

describe('BonDeReceptionShowComponent', () => {
  let component: BonDeReceptionShowComponent;
  let fixture: ComponentFixture<BonDeReceptionShowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BonDeReceptionShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonDeReceptionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
