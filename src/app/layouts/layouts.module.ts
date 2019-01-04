import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './dashboard/user/user.component';
import { TitleComponent } from './dashboard/title/title.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { NotificationItemComponent } from './dashboard/notification-item/notification-item.component';
import { BreadcrumbComponent } from './dashboard/breadcrumb/breadcrumb.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [AuthComponent, DashboardComponent, UserComponent, TitleComponent, NotificationsComponent, NotificationItemComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    UserComponent
  ]
})

export class LayoutsModule { }
