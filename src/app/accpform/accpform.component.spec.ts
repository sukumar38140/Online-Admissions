import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccpformComponent } from './accpform.component';

describe('AccpformComponent', () => {
  let component: AccpformComponent;
  let fixture: ComponentFixture<AccpformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccpformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
