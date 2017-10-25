import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotifyComponent, MessageComponent } from '../components';
import { NotificationComponent } from '../notification.component';
import { NotificationService } from '../services/notification.service';

const routes: Routes = [
  {
    path: 'Notification',
    component: NotificationComponent,
    children: [{
      path: '',
      redirectTo: 'overview',
      pathMatch: 'full'
    }, {
      path: 'overview',
      component: NotifyComponent
    }, {
      path: 'message/:id',
      component: MessageComponent
    }
    ]
  }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: [NotificationService]
})
export class RoutingModule { }

//export all the routing components used
export const ROUTING_COMPONENTS = [
  NotifyComponent,
  MessageComponent,
  NotificationComponent
];
