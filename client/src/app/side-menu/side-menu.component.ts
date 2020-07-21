import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavLink } from '../../../../common/index';
import { SideMenuService } from './side-menu.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  showFiller = false;
  @ViewChild('drawer') drawer: MatDrawer;
  navLinks: NavLink[] = [];
  selectedNav: NavLink;

  constructor(private sideMenuService: SideMenuService, private location: Location) {}

  ngOnInit(): void {
    this.sideMenuService.getLinks().subscribe((navLinks: NavLink[]) => {
      this.navLinks = navLinks;
    });
  }

  onTabClick($event) {
    const link = this.navLinks.find(n => n.name === $event.tab.textLabel);
    this.location.replaceState(`/${link.route}`);
  }
}
