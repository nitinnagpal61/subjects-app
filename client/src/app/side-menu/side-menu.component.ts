import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavLink } from '../../../../common/index';
import { SideMenuService } from './side-menu.service';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  showFiller = false;
  @ViewChild('drawer') drawer: MatDrawer;
  navLinks: NavLink[] = [];

  constructor(private sideMenuService: SideMenuService) {}

  ngOnInit(): void {
    this.sideMenuService.getLinks().subscribe((navLinks: NavLink[]) => {
      this.navLinks = navLinks;
    });
  }

  onNavigate(nav: NavLink) {
    this.navLinks.forEach(n => n.isVisible = false);
    const navLink = this.navLinks.find(n => n === nav);
    navLink.isVisible = true;
  }

  getVisibility(navLink: string) {
    return this.navLinks.find(n => n.name === navLink).isVisible;
  }
}
