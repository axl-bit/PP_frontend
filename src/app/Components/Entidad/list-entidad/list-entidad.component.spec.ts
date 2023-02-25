import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntidadComponent } from './list-entidad.component';

describe('ListEntidadComponent', () => {
  let component: ListEntidadComponent;
  let fixture: ComponentFixture<ListEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
