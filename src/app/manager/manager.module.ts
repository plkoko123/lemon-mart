import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../app-material.module';
import { AuthGuard } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { ShareComponentsModule } from '../shared-components.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserManagerComponent } from './user-management/user-manager.component';

@NgModule({
  imports: [CommonModule, ManagerRoutingModule, MaterialModule, ShareComponentsModule],
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
    UserManagerComponent,
  ],
  providers: [AuthService, AuthGuard],
})
export class ManagerModule {}
