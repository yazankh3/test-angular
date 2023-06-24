import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTicketComponent } from './it-ticket.component';

describe('ItTicketComponent', () => {
  let component: ItTicketComponent;
  let fixture: ComponentFixture<ItTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItTicketComponent]
    });
    fixture = TestBed.createComponent(ItTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
