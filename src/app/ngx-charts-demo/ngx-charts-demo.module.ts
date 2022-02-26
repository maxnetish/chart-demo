import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsDemoPageComponent } from './ngx-charts-demo-page/ngx-charts-demo-page.component';
import { Route, RouterModule } from '@angular/router';
import { BarChartModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';

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
    BarChartModule,
    FormsModule,
  ],
})
export class NgxChartsDemoModule { }
