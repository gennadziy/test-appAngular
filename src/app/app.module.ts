import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {HttpClientModule} from '@angular/common/http';
import {AddTestComponent} from './add-test/add-test.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {SearchPipe} from './pipe/search.pipe';
import {HoverDirective} from './directive/hover.directive';
import {UserdetailsComponent} from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AddTestComponent,
    HeaderComponent,
    FooterComponent,
    SearchPipe,
    LoginComponent,
    HoverDirective,
    LogoutComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
