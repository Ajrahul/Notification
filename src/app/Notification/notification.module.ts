import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes, Router } from '@angular/router';

//importing routing module and routing components used
import { RoutingModule, ROUTING_COMPONENTS } from './routing';
import { NotificationService } from './services/notification.service';

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    AlertModule.forRoot()
  ],
  declarations: [
    ROUTING_COMPONENTS
  ],
  providers: [
    NotificationService
  ]
})

export class NotificationModule { }
