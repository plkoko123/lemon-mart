import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';

@NgModule({
  imports: [CommonModule, InventoryRoutingModule, MaterialModule],
  declarations: [InventoryComponent],
})
export class InventoryModule {}
