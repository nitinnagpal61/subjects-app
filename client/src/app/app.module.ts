import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SubjectsComponent } from './side-menu/subjects/subjects.component';
import { SuspiciousActivityComponent } from './side-menu/suspicious-activity/suspicious-activity.component';
import { AdditionalInformationComponent } from './side-menu/additional-information/additional-information.component';
import { AdditionalInvInfoComponent } from './side-menu/additional-inv.info/additional-inv.info.component';
import { AssociatedInvItemsComponent } from './side-menu/associated-inv.items/associated-inv.items.component';
import { FinancialRecordsComponent } from './side-menu/financial-records/financial-records.component';
import { HRCQComponent } from './side-menu/hrcq/hrcq.component';
import { FormFillerComponent } from './side-menu/form-filler/form-filler.component';
import { ContactedAgenciesComponent } from './side-menu/contacted-agencies/contacted-agencies.component';
import { CorporateInvestigationsComponent } from './side-menu/corporate-investigations/corporate-investigations.component';
import { InvestigationHeaderComponent } from './investigation-header/investigation-header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import {
  MatPaginatorModule,
  MatPaginatorIntl
} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ActualSubjectCardComponent } from './side-menu/subjects/actual-subject-card/actual-subject-card.component';
import { SubjectsModule } from './side-menu/subjects/subjects.module';
import { getCustomPaginator } from './side-menu/subjects/paginator.provider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from './investigation-header/dialog/dialog.component';
import { WindowComponent } from './side-menu/subjects/window/window.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent,
    InvestigationHeaderComponent,
    SideMenuComponent,
    SubjectsComponent,
    ActualSubjectCardComponent,
    AdditionalInvInfoComponent,
    AdditionalInformationComponent,
    SuspiciousActivityComponent,
    FormFillerComponent,
    HRCQComponent,
    ContactedAgenciesComponent,
    CorporateInvestigationsComponent,
    FinancialRecordsComponent,
    AssociatedInvItemsComponent,
    DialogComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatDividerModule,
    MatBadgeModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    SubjectsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    DragDropModule,
    PortalModule
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: getCustomPaginator() }],
  bootstrap: [AppComponent]
})
export class AppModule {}
