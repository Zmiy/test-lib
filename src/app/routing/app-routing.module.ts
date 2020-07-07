import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import all the components for which navigation service has to be activated
import { SignInComponent } from '../modules/auth/sign-in/sign-in.component';
import { SignUpComponent } from '../modules/auth/sign-up/sign-up.component';
import { DashboardComponent } from '../modules/auth/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../modules/auth/forgot-password/forgot-password.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { VerifyEmailComponent } from '../modules/auth/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  // , canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
