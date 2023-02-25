import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoContComponent } from './add-tipo-cont.component';

describe('AddTipoContComponent', () => {
  let component: AddTipoContComponent;
  let fixture: ComponentFixture<AddTipoContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTipoContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
