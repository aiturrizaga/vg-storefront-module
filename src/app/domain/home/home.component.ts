import { Component, OnInit } from '@angular/core';
import { ProductService } from '@vg/core/services';
import { Product } from '@vg/core/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAll().subscribe(res => this.products = res);
  }
}
