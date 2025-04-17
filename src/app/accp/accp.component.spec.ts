import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccpComponent } from './accp.component';

describe('AccpComponent', () => {
  let component: AccpComponent;
  let fixture: ComponentFixture<AccpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
