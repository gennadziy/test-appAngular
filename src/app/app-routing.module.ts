import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './test/test.component';
import {AddTestComponent} from './add-test/add-test.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGaurdService} from './service/auth-gaurd.service';
import {UserdetailsComponent} from './userdetails/userdetails.component';

const routes: Routes = [
  {path: '', component: TestComponent, canActivate: [AuthGaurdService]},
  {path: 'addtest', component: AddTestComponent, canActivate: [AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'userdetails', component: UserdetailsComponent, canActivate: [AuthGaurdService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
