import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
})
export class CreateTicketComponent {
  ticket = {
    name: '',
    date: '',
    title: '',
    desc: '',
    open: 'open',
    mid: 'low',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/post-data', this.ticket).subscribe((data: any) => {
      console.log('Ticket created:', data);
      // TODO: Redirect to the ticket details page
    });
  }
}
