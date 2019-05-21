import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommonService } from './common.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { routedComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CronEditorModule } from 'ngx-cron-editor';
import { ExistingComponent } from './org-config/existing/existing.component';
import { ButtonRendererComponent } from './renderer/button-renderer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UtilService } from './util.service';
import { ScrollTopComponent } from './scroll/scroll.component';
import { ErrorComponent } from './error-page/error.component';
import { OrgHierarchyComponent } from './org-config/org-hierarchy/org-hierarchy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    routedComponents,
    ExistingComponent,
    ButtonRendererComponent,
    ScrollTopComponent,
    ErrorComponent,
    OrgHierarchyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
    CronEditorModule,
    NgxSpinnerModule
  ],
  providers: [CommonService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
