import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementFournisseurEditComponent } from './reglement-fournisseur-edit.component';

describe('ReglementFournisseurEditComponent', () => {
  let component: ReglementFournisseurEditComponent;
  let fixture: ComponentFixture<ReglementFournisseurEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglementFournisseurEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementFournisseurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
