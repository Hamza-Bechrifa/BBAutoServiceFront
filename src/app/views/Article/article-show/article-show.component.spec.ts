import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticleShowComponent } from './article-show.component';

describe('ArticleShowComponent', () => {
  let component: ArticleShowComponent;
  let fixture: ComponentFixture<ArticleShowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
