import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './side-menu/accounts/accounts.component';
import { AdditionalInformationComponent } from './side-menu/additional-information/additional-information.component';
import { AdditionalInvInfoComponent } from './side-menu/additional-inv.info/additional-inv.info.component';
import { SubjectsComponent } from './side-menu/subjects/subjects.component';
import { FormFillerComponent } from './side-menu/form-filler/form-filler.component';
import { HRCQComponent } from './side-menu/hrcq/hrcq.component';
import { FinancialRecordsComponent } from './side-menu/financial-records/financial-records.component';
import { AssociatedInvItemsComponent } from './side-menu/associated-inv.items/associated-inv.items.component';
import { ContactedAgenciesComponent } from './side-menu/contacted-agencies/contacted-agencies.component';
import { CorporateInvestigationsComponent } from './side-menu/corporate-investigations/corporate-investigations.component';
import { SuspiciousActivityComponent } from './side-menu/suspicious-activity/suspicious-activity.component';
import { AppComponent } from './app.component';
import { InvestigationHeaderComponent } from './investigation-header/investigation-header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = [
  { path: '*', redirectTo: '/' },
  { path: 'additionalinvinfo', component: AdditionalInvInfoComponent },
  {
    path: 'subjects',
    component: SubjectsComponent,
    loadChildren: () =>
      import('./side-menu/subjects/subjects.module').then(m => m.SubjectsModule)
  },
  { path: 'accounts', component: AccountsComponent },
  { path: 'additionalinformation', component: AdditionalInformationComponent },
  { path: 'associatedinvitems', component: AssociatedInvItemsComponent },
  { path: 'suspiciousactivity', component: SuspiciousActivityComponent },
  { path: 'formfiller', component: FormFillerComponent },
  { path: 'hrcq', component: HRCQComponent },
  { path: 'financialrecords', component: FinancialRecordsComponent },
  { path: 'contactedagencies', component: ContactedAgenciesComponent },
  {
    path: 'corporateinvestigations',
    component: CorporateInvestigationsComponent
  },
  { path: 'sidemenu', component: SideMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
