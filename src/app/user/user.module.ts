import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../app-material.module';
import { AuthGuard } from '../auth/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { UserMaterialModule } from './user-material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
    MaterialModule,
    UserMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [ProfileComponent, LogoutComponent, NavigationMenuComponent],
  providers: [UserService, AuthGuard],
})
export class UserModule {}
