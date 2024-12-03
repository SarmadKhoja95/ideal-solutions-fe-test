import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterOutlet, SidebarModule, ToastModule, NgIf],
  providers: [MessageService],
})
export class DefaultLayoutComponent {
  collapsed: boolean = true;
  sidebarVisible: boolean = true;
  organizationOpen: boolean = false;

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  toggleSidebarWidth() {
    this.collapsed = !this.collapsed; // Toggles between expanded and collapsed states
  }

  toggleOrganization() {
    this.organizationOpen = !this.organizationOpen;
  }
}
