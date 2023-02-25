import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoContComponent } from './list-tipo-cont.component';

describe('ListTipoContComponent', () => {
  let component: ListTipoContComponent;
  let fixture: ComponentFixture<ListTipoContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipoContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTipoContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
