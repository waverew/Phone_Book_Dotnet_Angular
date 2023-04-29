import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookitemComponent } from './bookitem.component';

describe('BookitemComponent', () => {
  let component: BookitemComponent;
  let fixture: ComponentFixture<BookitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
