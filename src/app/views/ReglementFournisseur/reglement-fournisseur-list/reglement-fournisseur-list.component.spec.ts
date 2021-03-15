import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementFournisseurListComponent } from './reglement-fournisseur-list.component';

describe('ReglementFournisseurListComponent', () => {
  let component: ReglementFournisseurListComponent;
  let fixture: ComponentFixture<ReglementFournisseurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglementFournisseurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementFournisseurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
