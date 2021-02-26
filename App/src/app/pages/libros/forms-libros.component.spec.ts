import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLibrosComponent } from './forms-libros.component';

describe('FormsLibrosComponent', () => {
  let component: FormsLibrosComponent;
  let fixture: ComponentFixture<FormsLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
