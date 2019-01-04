import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItems } from '../core/components/menu/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './directives/accordion';
import { ToggleFullscreenDirective } from './directives/fullscreen/toggle-fullscreen.directive';
import { CardRefreshDirective } from './directives/card/card-refresh.directive';
import { CardToggleDirective } from './directives/card/card-toggle.directive';
import { CardComponent } from './directives/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentRemoveDirective } from './directives/elements/parent-remove.directive';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './directives/spinner/spinner.component';
import { ToastyModule } from 'ng2-toasty';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { TagInputModule } from 'ngx-chips';
import { ClickOutsideModule } from 'ng-click-outside';
import 'rxjs/add/operator/filter';

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
    CardRefreshDirective,
    CardToggleDirective,
    ParentRemoveDirective,
    CardComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    PaginationModule.forRoot(),
    ToastyModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    TagInputModule,
    ClickOutsideModule,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
    CardRefreshDirective,
    CardToggleDirective,
    ParentRemoveDirective,
    CardComponent,
    SpinnerComponent,
    NgbModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    ToastyModule,
    SimpleNotificationsModule,
    TagInputModule,
    ClickOutsideModule,
  ],
  providers: [
    MenuItems
  ]
})
export class SharedModule { }
