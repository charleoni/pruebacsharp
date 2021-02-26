import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialFormsComponent } from './editorial-forms.component';

describe('EditorialFormsComponent', () => {
  let component: EditorialFormsComponent;
  let fixture: ComponentFixture<EditorialFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
