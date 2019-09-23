import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionEliminarComponent } from './cancion-eliminar.component';

describe('CancionEliminarComponent', () => {
  let component: CancionEliminarComponent;
  let fixture: ComponentFixture<CancionEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
