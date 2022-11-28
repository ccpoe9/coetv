import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitedescComponent } from './sitedesc.component';

describe('SitedescComponent', () => {
  let component: SitedescComponent;
  let fixture: ComponentFixture<SitedescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitedescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitedescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
