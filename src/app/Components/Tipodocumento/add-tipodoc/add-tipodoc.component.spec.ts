import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipodocComponent } from './add-tipodoc.component';

describe('AddTipodocComponent', () => {
  let component: AddTipodocComponent;
  let fixture: ComponentFixture<AddTipodocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipodocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTipodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
