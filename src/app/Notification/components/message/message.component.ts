import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import * as moment from 'moment/moment';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'message-component',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.scss'],
  providers: [NotificationService]
})
export class MessageComponent implements OnInit, OnDestroy {
  message: any;
  msgId: number = 0;

  constructor(
    private notificationService: NotificationService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.msgId = params["id"];
      this.fetchMsg(this.msgId);
    });
  }

  fetchMsg(id) {
    this.json.forEach(data => {
      if (data.id == id) {
        this.message = data.msg;
      }
    });
  }

  goto() {
    this._router.navigate([`Notification`]);
  }

  ngOnDestroy() {
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

}
