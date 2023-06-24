import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-it-ticket-details-component',
  templateUrl: './it-ticket-details-component.component.html',
  styleUrls: ['./it-ticket-details-component.component.css'],
})
export class ItTicketDetailsComponentComponent implements OnInit {
  ticket = {
    name: '',
    date: '',
    title: '',
    desc: '',
    open: 'open',
    mid: 'low',
  };
  Issue = {
    Issue: '',
    image: '',
  };
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
    return this.http.get(`/api/get-data-it/${id}`);
  }
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.Issue.image = file;
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('Issue', this.Issue.Issue);
    formData.append('image', this.Issue.image);

    this.http.post('/api/post-data-it', formData).subscribe((data: any) => {
      console.log('Ticket created:', data);
    });
  }
}
