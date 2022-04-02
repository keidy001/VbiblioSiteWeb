import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLIvreComponent } from './detail-livre.component';

describe('DetailLIvreComponent', () => {
  let component: DetailLIvreComponent;
  let fixture: ComponentFixture<DetailLIvreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLIvreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLIvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
