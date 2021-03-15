import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReglementClientShowComponent } from './reglement-client-show.component';

describe('ReglementClientShowComponent', () => {
  let component: ReglementClientShowComponent;
  let fixture: ComponentFixture<ReglementClientShowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementClientShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementClientShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
