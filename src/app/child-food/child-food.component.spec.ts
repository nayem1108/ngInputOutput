import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFoodComponent } from './child-food.component';

describe('ChildFoodComponent', () => {
  let component: ChildFoodComponent;
  let fixture: ComponentFixture<ChildFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
