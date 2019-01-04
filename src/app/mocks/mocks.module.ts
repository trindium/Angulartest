import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsComponent } from './forms/forms.component';
import { MocksRoutingModule } from './mocks-routing.module';

@NgModule({
  declarations: [
    HomePageComponent, 
    FormsComponent
  ],
  imports: [
    CommonModule,
    MocksRoutingModule
  ],
  exports: [
    HomePageComponent,
    FormsComponent,
  ]
})

export class MocksModule { }
