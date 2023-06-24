import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket-details-component',
  templateUrl: './ticket-details-component.component.html',
  styleUrls: ['./ticket-details-component.component.css'],
})
export class TicketDetailsComponentComponent implements OnInit {
  ticket: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Ticket ID:', id);
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.getTicket(id).subscribe((data: any) => {
        console.log('Ticket data:', data);
        this.ticket = data;
        console.log('Ticket object:', this.ticket);
      });
    }
  }

  getTicket(id: string) {
    return this.http.get(`/api/get-data/${id}`);
  }
}
