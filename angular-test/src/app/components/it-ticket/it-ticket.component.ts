import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-it-ticket',
  templateUrl: './it-ticket.component.html',
  styleUrls: ['./it-ticket.component.css'],
})
export class ItTicketComponent {
  @Input() sidebarOpen: boolean = false;
  tickets: any[] = [];
  filteredTickets: any[] = [];
  searchQuery: string = '';
  nameQuery = '';
  dateQuery = '';
  titleQuery = '';
  descQuery = '';
  openFilter = '';
  midFilter = '';
  searchResult = true;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getTickets().subscribe((data) => {
      this.tickets = data;
      this.filteredTickets = data;
    });
  }

  getTickets(): Observable<any> {
    return this.http.get('/api/get-data-it');
  }

  viewTicket(id: number) {
    this.router.navigate(['/it-ticket', id.toString()]);
  }
  search() {
    this.filteredTickets = this.tickets.filter((ticket) => {
      const nameMatch =
        !this.nameQuery ||
        ticket.name.toLowerCase().includes(this.nameQuery.toLowerCase());
      const dateMatch =
        !this.dateQuery ||
        ticket.date.toLowerCase().includes(this.dateQuery.toLowerCase());
      const titleMatch =
        !this.titleQuery ||
        ticket.title.toLowerCase().includes(this.titleQuery.toLowerCase());
      const descMatch =
        !this.descQuery ||
        ticket.desc.toLowerCase().includes(this.descQuery.toLowerCase());
      const openMatch =
        !this.openFilter ||
        ticket.open.toLowerCase() === this.openFilter.toLowerCase();
      const midMatch =
        !this.midFilter ||
        ticket.mid.toLowerCase() === this.midFilter.toLowerCase();
      return (
        nameMatch &&
        dateMatch &&
        titleMatch &&
        descMatch &&
        openMatch &&
        midMatch
      );
    });

    this.searchResult = this.filteredTickets.length > 0;
  }

  clearFilters() {
    this.nameQuery = '';
    this.dateQuery = '';
    this.titleQuery = '';
    this.descQuery = '';
    this.openFilter = '';
    this.midFilter = '';
    this.searchResult = true;
    this.filteredTickets = this.tickets;
  }
}
