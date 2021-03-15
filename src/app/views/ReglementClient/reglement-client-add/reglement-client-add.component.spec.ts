import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReglementClientAddComponent } from './reglement-client-add.component';

describe('ReglementClientAddComponent', () => {
  let component: ReglementClientAddComponent;
  let fixture: ComponentFixture<ReglementClientAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementClientAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementClientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
