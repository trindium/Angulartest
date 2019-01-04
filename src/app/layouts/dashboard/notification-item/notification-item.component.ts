import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css']
})

export class NotificationItemComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() time: string
  @Input() image: string = 'assets/images/user.png';

  constructor() { }

  ngOnInit() {
  }

}
