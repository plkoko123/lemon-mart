import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';

@NgModule({
  imports: [CommonModule, PosRoutingModule],
  declarations: [PosComponent],
})
export class PosModule {}
