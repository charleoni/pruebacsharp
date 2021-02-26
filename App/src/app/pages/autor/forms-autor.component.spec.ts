import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAutorComponent } from './forms-autor.component';

describe('FormsAutorComponent', () => {
  let component: FormsAutorComponent;
  let fixture: ComponentFixture<FormsAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
