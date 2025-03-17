import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualformComponent } from './qualform.component';

describe('QualformComponent', () => {
  let component: QualformComponent;
  let fixture: ComponentFixture<QualformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
