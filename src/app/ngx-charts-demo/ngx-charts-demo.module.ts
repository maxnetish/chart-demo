import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsDemoPageComponent } from './ngx-charts-demo-page/ngx-charts-demo-page.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full',
  },
  {
    path: 'demo',
    component: NgxChartsDemoPageComponent,
  },
];

@NgModule({
  declarations: [
    NgxChartsDemoPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class NgxChartsDemoModule { }
