import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavBoxComponent } from './fav-box.component';

describe('FavBoxComponent', () => {
  let component: FavBoxComponent;
  let fixture: ComponentFixture<FavBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
