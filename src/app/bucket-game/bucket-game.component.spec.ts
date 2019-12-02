import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketGameComponent } from './bucket-game.component';

describe('BucketGameComponent', () => {
  let component: BucketGameComponent;
  let fixture: ComponentFixture<BucketGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
