import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoContComponent } from './edit-tipo-cont.component';

describe('EditTipoContComponent', () => {
  let component: EditTipoContComponent;
  let fixture: ComponentFixture<EditTipoContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTipoContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
