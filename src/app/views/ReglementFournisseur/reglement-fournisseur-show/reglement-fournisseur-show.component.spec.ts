import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementFournisseurShowComponent } from './reglement-fournisseur-show.component';

describe('ReglementFournisseurShowComponent', () => {
  let component: ReglementFournisseurShowComponent;
  let fixture: ComponentFixture<ReglementFournisseurShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglementFournisseurShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementFournisseurShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
