import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSellerComponent } from './header-seller.component';

describe('HeaderSellerComponent', () => {
  let component: HeaderSellerComponent;
  let fixture: ComponentFixture<HeaderSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
