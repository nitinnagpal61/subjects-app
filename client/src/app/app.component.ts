import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer: MatDrawer;
  title = 'POC for Subjects App';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'arrow-drop-down',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/arrow_drop_down-24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'note-add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/note_add-24px.svg')
    );

    iconRegistry.addSvgIcon(
      'open_in_new',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/open_in_new-24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit-24px.svg')
    );

    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/delete_outline-24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search-24px.svg')
    );

    iconRegistry.addSvgIcon(
      'close_fullscreen',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/close_fullscreen-24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'maximize',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/maximize-24px.svg')
    );

    iconRegistry.addSvgIcon(
      'minimize',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/minimize-24px.svg')
    );

    iconRegistry.addSvgIcon(
      'landline',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/local_phone-24px.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'mobile',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/phone_iphone-24px.svg'
      )
    );
  }
}
