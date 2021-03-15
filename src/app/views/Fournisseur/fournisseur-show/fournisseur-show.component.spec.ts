import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurShowComponent } from './fournisseur-show.component';

describe('FournisseurShowComponent', () => {
  let component: FournisseurShowComponent;
  let fixture: ComponentFixture<FournisseurShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
