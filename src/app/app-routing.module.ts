import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPComponent} from './login-p/login-p.component';
import {HomePComponent} from './home-p/home-p.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ExcelJSONComponent} from './excel-json/excel-json.component';
import {RouteGuardService} from './route-guard.service';

const routes: Routes = [
  {path: '', component: HomePComponent},
  {path: 'login', component: LoginPComponent},
  {path: 'homepage', component: HomepageComponent, canActivate: [RouteGuardService]},
  {path: 'excel', component: ExcelJSONComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
