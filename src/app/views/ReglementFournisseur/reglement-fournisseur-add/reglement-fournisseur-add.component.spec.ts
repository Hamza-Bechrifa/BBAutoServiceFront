import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementFournisseurAddComponent } from './reglement-fournisseur-add.component';

describe('ReglementFournisseurAddComponent', () => {
  let component: ReglementFournisseurAddComponent;
  let fixture: ComponentFixture<ReglementFournisseurAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglementFournisseurAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementFournisseurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
