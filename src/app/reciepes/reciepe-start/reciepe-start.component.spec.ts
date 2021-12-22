import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepeStartComponent } from './reciepe-start.component';

describe('ReciepeStartComponent', () => {
  let component: ReciepeStartComponent;
  let fixture: ComponentFixture<ReciepeStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciepeStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciepeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
