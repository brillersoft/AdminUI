import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerConfigComponent } from './server-config/server-config.component';
import { BatchSchedulerComponent } from './batch-scheduler/batch-scheduler.component';
import { BatchStatusComponent } from './batch-status/batch-status.component';
import { OrgConfigComponent } from './org-config/org-config.component';
import { MailConfigComponent } from './mail-config/mail-config.component';
import { BusinessHierarchyComponent } from './org-config/business-hierarchy/business-hierarchy.component';
import { ExistingComponent } from './org-config/existing/existing.component';
import { ErrorComponent } from './error-page/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ServerConfigComponent },
  { path: 'scheduler', component: BatchSchedulerComponent },
  { path: 'org-config/new', component: OrgConfigComponent },
  { path: 'org-config/existing/:id', component: OrgConfigComponent },
  { path: 'org-config/existing-list', component: ExistingComponent },
  { path: 'batch-status', component: BatchStatusComponent },
  { path: 'mail-config', component: MailConfigComponent },
  { path: 'business-hierarchy/:addressId', component: BusinessHierarchyComponent },
  { path: 'business-hierarchy', pathMatch: 'full', redirectTo: '' },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  ServerConfigComponent,
  BatchSchedulerComponent,
  BatchStatusComponent,
  OrgConfigComponent,
  MailConfigComponent,
  BusinessHierarchyComponent,
  ExistingComponent
];
