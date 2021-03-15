import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BonDeReceptionEditComponent } from './bon-de-reception-edit.component';

describe('BonDeReceptionEditComponent', () => {
  let component: BonDeReceptionEditComponent;
  let fixture: ComponentFixture<BonDeReceptionEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BonDeReceptionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonDeReceptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
