import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplNewComponent } from './empl-new.component';

describe('EmplNewComponent', () => {
  let component: EmplNewComponent;
  let fixture: ComponentFixture<EmplNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
