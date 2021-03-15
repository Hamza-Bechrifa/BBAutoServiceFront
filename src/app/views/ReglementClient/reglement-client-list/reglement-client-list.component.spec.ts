import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReglementClientListComponent } from './reglement-client-list.component';

describe('ReglementClientListComponent', () => {
  let component: ReglementClientListComponent;
  let fixture: ComponentFixture<ReglementClientListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
