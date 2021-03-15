import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReglementClientEditComponent } from './reglement-client-edit.component';

describe('ReglementClientEditComponent', () => {
  let component: ReglementClientEditComponent;
  let fixture: ComponentFixture<ReglementClientEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementClientEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementClientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
