import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipodocComponent } from './edit-tipodoc.component';

describe('EditTipodocComponent', () => {
  let component: EditTipodocComponent;
  let fixture: ComponentFixture<EditTipodocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipodocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTipodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
