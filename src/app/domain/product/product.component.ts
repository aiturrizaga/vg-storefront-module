import { Component, OnInit } from '@angular/core';
import { ProductService } from '@vg/core/services';
import { ProductHelper } from '@vg/shared/helpers';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@vg/core/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent implements OnInit {
  public product?: Product;

  constructor(private productService: ProductService,
              public productHelper: ProductHelper,
              private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      const slug = p['slug'];
      if (slug) {
        this.getProduct(slug);
      }
    })
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  getProduct(slug: string): void {
    this.productService.getBySlug(slug)
      .subscribe(res => this.product = res);
  }
}
