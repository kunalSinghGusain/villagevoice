import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerystoreComponent } from './gallerystore.component';

describe('GallerystoreComponent', () => {
  let component: GallerystoreComponent;
  let fixture: ComponentFixture<GallerystoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerystoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
