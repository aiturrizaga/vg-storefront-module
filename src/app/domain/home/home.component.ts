import { Component, OnInit } from '@angular/core';
import { ProductService } from '@vg/core/services';
import { Product } from '@vg/core/interfaces';
import { environment } from '@vg/env/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {

  public products: Product[] = [];
  public mode: string = environment.mode;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getProducts();
    console.log('MODE: ', this.mode);
  }

  getProducts(): void {
    this.productService.getAll().subscribe(res => this.products = res);
  }
}
