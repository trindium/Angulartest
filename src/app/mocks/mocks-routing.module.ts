import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component'
import { FormsComponent } from './forms/forms.component';

const mockRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Mocks',
      status: false
    },
    children: [
    {
      path: 'forms',
      component: FormsComponent,
      data: {
        breadcrumb: 'Forms',
        status: true
      }
    },
    {
      path: 'home',
      component: HomePageComponent,
      data: {
        breadcrumb: 'Home',
        status: true
      }
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mockRoutes)],
  exports: [RouterModule]
})
export class MocksRoutingModule { }
