import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '@vg/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/products.json');
  }

  getBySlug(slug: string): Observable<Product | undefined> {
    return this.getAll().pipe(
      map(products => products.find(prod => prod.slug === slug))
    );
  }

}
