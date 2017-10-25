import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';

@Component({
  selector: 'notify-component',
  templateUrl: 'notify.component.html',
  styleUrls: ['notify.scss'],
  providers: [NotificationService]
})
export class NotifyComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  notificationCount;

  currentDate: any = moment().format('dddd MMM DD, YYYY');

  constructor(
    private notificationService: NotificationService,
    private _router: Router
  ) { }

  initialiseCounter() {
    this.notificationCount = {
      assignedTask: 0,
      reminder: 0,
      notification: 0,
    }
  }

  //proxy user to send message to the server.
  proxyServer() {
    setInterval(() => {
      const i = this.generateRandomNumber();
      this.notificationService.sendMessage(this.json[i]);
      this.message = '';
    }, 5000);
  }

  goto(id: number) {
    console.log('id',id);
    this._router.navigate([`Notification/message/${id}`]);
  }

  ngOnInit() {
    this.initialiseCounter(); // initialise counter for notification messages
    this.proxyServer(); // proxy message sender.
    this.getNotification();
  }

  getTime(time) {
    return moment(time, 'DD-MM-YYYY hh:mm:ss a').fromNow();
  }
  getNotification() {
    this.connection = this.notificationService.getMessages().subscribe((res) => {
      let data: any = res;
      // increment specific notification based on kind of notification received
      switch (data.text.type) {
        case 1:
          const time1 = moment();
          this.notificationCount.assignedTask += 1;
          this.messages.unshift({ time: time1, text: data.text });
          break;
        case 2:
          const time2 = moment().format('DD-MM-YYYY hh:mm:ss a');
          this.notificationCount.reminder += 1;
          this.messages.unshift({ time: time2, text: data.text });
          break;
        case 3:
          const time3 = moment().format('DD-MM-YYYY hh:mm:ss a');
          this.notificationCount.notification += 1;
          this.messages.unshift({ time: time3, text: data.text });
          break;
      }
    });
  }

  viewText(type) {
    if (type === 1) {
      return 'view task >';
    } else if (type === 2) {
      return 'view reminder >';
    } else {
      return 'view notification >';
    }
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  // mock notification messages
  // 1 depict assigned type
  // 2 depict reminder
  // 3 depict notification

  json = [{
    type: 1,
    id: 1,
    msg: 'Oliver1 Quiver has assigned the interview- Book travel type to you'
  }, {
    type: 2,
    id: 2,
    msg: 'Oliver2 Quiver has assigned the interview- Book travel type to you'
  }, {
    type: 3,
    id: 3,
    msg: 'Oliver3 Quiver has assigned the interview- Book travel type to you'
  }, {
    type: 1,
    id: 4,
    msg: 'Oliver4 Quiver has assigned the interview- Book travel type to you'
  }, {
    type: 2,
    id: 5,
    msg: 'Oliver5 Quiver has assigned the interview- Book travel type to you'
  }, {
    type: 3,
    id: 6,
    msg: 'Oliver6 Quiver has assigned the interview- Book travel type to you'
  }];

  generateRandomNumber() {
    return Math.floor((Math.random() * 5) + 1);
  }
}
