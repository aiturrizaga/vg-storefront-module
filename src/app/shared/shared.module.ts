import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '@vg/shared/components';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    ProductCardComponent
  ],
  exports: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class SharedModule {
}
