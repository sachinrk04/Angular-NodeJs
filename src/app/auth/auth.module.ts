import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signUp.component';
import { AngularMaterialModule } from '../angular-material.module';
import { AuthRoutingModule } from './auth-routing.module'

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule {}
