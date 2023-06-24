import { Component, OnInit, NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  showProjects = false;
  showteams = false;
  sidebarOpen = true;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  toggleProjects() {
    this.showProjects = !this.showProjects;
    this.showteams = false;
  }

  toggleteams() {
    this.showteams = !this.showteams;
    this.showProjects = false;
  }
}
