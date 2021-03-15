import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BonDeReceptionListComponent } from './bon-de-reception-list.component';

describe('BonDeReceptionListComponent', () => {
  let component: BonDeReceptionListComponent;
  let fixture: ComponentFixture<BonDeReceptionListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BonDeReceptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonDeReceptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
