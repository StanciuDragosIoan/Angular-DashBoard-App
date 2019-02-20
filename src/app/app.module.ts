import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TasksComponent } from './components/tasks/tasks.component';
import { StickiesComponent } from './components/stickies/stickies.component';
import { StickyItemComponent } from './components/sticky-item/sticky-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TasksComponent,
    StickiesComponent,
    StickyItemComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
