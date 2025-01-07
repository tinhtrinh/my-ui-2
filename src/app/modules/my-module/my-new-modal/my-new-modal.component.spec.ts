import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewModalComponent } from './my-new-modal.component';

describe('MyNewModalComponent', () => {
  let component: MyNewModalComponent;
  let fixture: ComponentFixture<MyNewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyNewModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
