import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionedComponent } from './questioned.component';

describe('QuestiontypeComponent', () => {
  let component: QuestionedComponent;
  let fixture: ComponentFixture<QuestionedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
