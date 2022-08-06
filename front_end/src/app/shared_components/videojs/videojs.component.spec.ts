import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojsComponent } from './videojs.component';

describe('VideojsComponent', () => {
  let component: VideojsComponent;
  let fixture: ComponentFixture<VideojsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideojsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
