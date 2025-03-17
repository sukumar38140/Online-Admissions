import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartformComponent } from './partform.component';

describe('PartformComponent', () => {
  let component: PartformComponent;
  let fixture: ComponentFixture<PartformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
