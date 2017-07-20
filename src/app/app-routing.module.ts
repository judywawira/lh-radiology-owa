import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import { OrdersComponent } from './components/orders/orders.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportTemplatesComponent } from './components/report-templates/report-templates.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';
import { ReportAuthoringComponent } from './components/report-authoring/report-authoring.component'

const routes: Routes = [
  {path: '', redirectTo: 'dashboard/orders', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'orders', component: OrdersComponent, children: [

    ]},
    {path: 'reports', component: ReportsComponent},
    {path: 'templates', component: ReportTemplatesComponent}
  ]},
  {path: 'add-order', component: AddOrderComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'add-report', component: ReportAuthoringComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
