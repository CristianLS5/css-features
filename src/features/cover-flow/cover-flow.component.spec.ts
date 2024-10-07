import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverFlowComponent } from './cover-flow.component';

describe('CoverFlowComponent', () => {
  let component: CoverFlowComponent;
  let fixture: ComponentFixture<CoverFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
