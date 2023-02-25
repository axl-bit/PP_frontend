import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipodocComponent } from './list-tipodoc.component';

describe('ListTipodocComponent', () => {
  let component: ListTipodocComponent;
  let fixture: ComponentFixture<ListTipodocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipodocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTipodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
