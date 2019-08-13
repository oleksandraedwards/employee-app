import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplEditComponent } from './empl-edit.component';

describe('EmplEditComponent', () => {
  let component: EmplEditComponent;
  let fixture: ComponentFixture<EmplEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
