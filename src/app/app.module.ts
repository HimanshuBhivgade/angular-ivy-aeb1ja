import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import Http module
import { HttpModule } from '@angular/common/http';

// import ReactiveFormsModule for reactive form
import { ReactiveFormsModule } from '@angular/forms';

// import module for Routing.
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminService } from './services/admin.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'profile/:adminId',
        component: ProfileComponent,
      },
    ]),
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
  ],
  providers: [AdminService],
  bootstrap: [AppComponent],
})
export class AppModule {}
