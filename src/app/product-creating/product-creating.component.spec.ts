import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreatingComponent } from './product-creating.component';

describe('ProductCreatingComponent', () => {
  let component: ProductCreatingComponent;
  let fixture: ComponentFixture<ProductCreatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCreatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
