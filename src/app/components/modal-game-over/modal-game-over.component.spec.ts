import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGameOverComponent } from './modal-game-over.component';

describe('ModalGameOverComponent', () => {
  let component: ModalGameOverComponent;
  let fixture: ComponentFixture<ModalGameOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGameOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGameOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
