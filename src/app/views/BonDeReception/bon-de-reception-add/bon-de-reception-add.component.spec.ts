import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BonDeReceptionAddComponent } from './bon-de-reception-add.component';

describe('BonDeReceptionAddComponent', () => {
  let component: BonDeReceptionAddComponent;
  let fixture: ComponentFixture<BonDeReceptionAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BonDeReceptionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonDeReceptionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
