import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

export interface NavLink {
  name: string;
  isVisible: boolean;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  showFiller = false;
  @ViewChild('drawer') drawer: MatDrawer;
  navLinks: NavLink[] = [
    { name: 'Additional Inv. Info.', isVisible: false, route: 'additionalinvinfo'},
    { name: 'Subjects', isVisible: true, route: 'subjects'},
    { name: 'Accounts', isVisible: false, route: 'accounts'},
    { name: 'Financial Records', isVisible: false, route: 'financialrecords'},
    { name: 'Contacted Agencies', isVisible: false, route: 'contactedagencies'},
    { name: 'HRCQ', isVisible: false, route: 'hrcq'},
    { name: 'Associated Inv. Items', isVisible: false, route: 'associatedinvitems'},
    { name: 'Form Filler', isVisible: false, route: 'formfiller'},
    { name: 'Additional Information', isVisible: false, route: 'additionalinformation'},
    { name: 'Corporate Investigations', isVisible: false, route: 'corporateinvestigations'},
    { name: 'Suspicious Activity', isVisible: false, route: 'suspiciousactivity'},
  ];


  onNavigate(nav: NavLink) {
    this.navLinks.forEach(n => n.isVisible = false);
    const navLink = this.navLinks.find(n => n === nav);
    navLink.isVisible = true;
  }

  getVisibility(navLink: string) {
    return this.navLinks.find(n => n.name === navLink).isVisible;
  }
}
