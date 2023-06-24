import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { TicketDetailsComponentComponent } from './components/ticket-details-component/ticket-details-component.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { HomeComponent } from './components/home/home.component';
import { ItTicketComponent } from './components/it-ticket/it-ticket.component';
import { ItTicketDetailsComponentComponent } from './components/it-ticket-details-component/it-ticket-details-component.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'create', component: CreateTicketComponent },
  { path: 'my-tickets', component: MyTicketsComponent },
  { path: 'my-tickets/:id', component: TicketDetailsComponentComponent },
  { path: 'it-ticket/:id', component:ItTicketDetailsComponentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'it', component: ItTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
