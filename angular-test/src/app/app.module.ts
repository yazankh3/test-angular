import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { TicketDetailsComponentComponent } from './components/ticket-details-component/ticket-details-component.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { FormsModule } from '@angular/forms';
import { ItTicketComponent } from './components/it-ticket/it-ticket.component';
import { ItTicketDetailsComponentComponent } from './components/it-ticket-details-component/it-ticket-details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    MyTicketsComponent,
    TicketDetailsComponentComponent,
    CreateTicketComponent,
    ItTicketComponent,
    ItTicketDetailsComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
