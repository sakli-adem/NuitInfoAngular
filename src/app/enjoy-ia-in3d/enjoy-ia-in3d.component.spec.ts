import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjoyIaIn3dComponent } from './enjoy-ia-in3d.component';

describe('EnjoyIaIn3dComponent', () => {
  let component: EnjoyIaIn3dComponent;
  let fixture: ComponentFixture<EnjoyIaIn3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnjoyIaIn3dComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnjoyIaIn3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
