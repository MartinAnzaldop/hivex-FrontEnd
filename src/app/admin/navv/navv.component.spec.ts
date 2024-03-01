import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavvComponent } from './navv.component';

describe('NavvComponent', () => {
  let component: NavvComponent;
  let fixture: ComponentFixture<NavvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
