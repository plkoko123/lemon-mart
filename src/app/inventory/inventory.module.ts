import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';

@NgModule({
  imports: [CommonModule, InventoryRoutingModule, MaterialModule],
  declarations: [InventoryComponent, InventoryDashboardComponent, StockEntryComponent],
})
export class InventoryModule {}
