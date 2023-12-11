import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonografiaComponent } from './monografia.component';

describe('MonografiaComponent', () => {
  let component: MonografiaComponent;
  let fixture: ComponentFixture<MonografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonografiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
