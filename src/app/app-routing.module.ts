import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ngx-charts',
    loadChildren: async () => {
      const m = await import('./ngx-charts-demo/ngx-charts-demo.module');
      return m.NgxChartsDemoModule;
    },
  },
  {
    path: '',
    redirectTo: 'ngx-charts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
