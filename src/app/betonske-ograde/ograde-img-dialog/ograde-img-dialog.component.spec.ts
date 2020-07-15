import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgradeImgDialogComponent } from './ograde-img-dialog.component';

describe('OgradeImgDialogComponent', () => {
  let component: OgradeImgDialogComponent;
  let fixture: ComponentFixture<OgradeImgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgradeImgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgradeImgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
