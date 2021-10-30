import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseItemsComponent } from './response-items.component';

describe('ResponseItemsComponent', () => {
  let component: ResponseItemsComponent;
  let fixture: ComponentFixture<ResponseItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
