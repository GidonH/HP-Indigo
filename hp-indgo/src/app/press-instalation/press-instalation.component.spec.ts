import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressInstalationComponent } from './press-instalation.component';

describe('PressInstalationComponent', () => {
  let component: PressInstalationComponent;
  let fixture: ComponentFixture<PressInstalationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressInstalationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressInstalationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
