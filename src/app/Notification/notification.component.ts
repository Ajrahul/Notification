import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';

@Component({
  selector: 'notification-landing',
  templateUrl: './notification.component.html',
  styleUrls: ['./components/notify/notify.scss'],

})
export class NotificationComponent implements OnInit {
  currentDate: any = moment().format('dddd MMM DD, YYYY');
  constructor() {
  }

  ngOnInit() {
  }

}
