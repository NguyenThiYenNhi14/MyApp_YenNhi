import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Learndirecrive } from './learndirecrive';

describe('Learndirecrive', () => {
  let component: Learndirecrive;
  let fixture: ComponentFixture<Learndirecrive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Learndirecrive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Learndirecrive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
