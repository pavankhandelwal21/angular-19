import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchControlFlowComponent } from './switch-control-flow.component';

describe('SwitchControlFlowComponent', () => {
  let component: SwitchControlFlowComponent;
  let fixture: ComponentFixture<SwitchControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchControlFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
