import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../app-material.module';
import { CategoriesComponent } from './categories/categories.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { ProductsComponent } from './products/products.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';

@NgModule({
  imports: [CommonModule, InventoryRoutingModule, MaterialModule],
  declarations: [
    InventoryComponent,
    InventoryDashboardComponent,
    StockEntryComponent,
    ProductsComponent,
    CategoriesComponent,
  ],
})
export class InventoryModule {}
