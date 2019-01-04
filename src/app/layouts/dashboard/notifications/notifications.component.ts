import { Component, OnInit } from '@angular/core';

const notifications: any = [
  {title: 'John Doe', message: 'Some message', time: '10 hours ago'},
  {title: 'Fernando Leonardelli', message: 'See new feature', time: '27/10/2018 11:10 AM'},
  {title: 'Emiliano Romero', message: 'I like pink t-shits', time: 'a week ago'},
]

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: any;
  quantity: number = 10;

  constructor() {
    this.notifications = notifications;
  }

  ngOnInit() {
  }

}
