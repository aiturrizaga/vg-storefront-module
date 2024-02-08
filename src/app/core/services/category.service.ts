import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Category } from '@vg/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>('assets/data/categories.json');
  }

  getBySlug(slug: string): Observable<Category | undefined> {
    return this.getAll().pipe(
      map(categories => categories.find(category => category.slug === slug))
    );
  }

  getFeatured(): Observable<Category[]> {
    return this.getAll().pipe(
      map(categories => categories.filter(category => category.featured))
    );
  }

  getShortcut(): Observable<Category[]> {
    return this.getAll().pipe(
      map(categories => categories.filter(category => category.shortcut))
    );
  }

}
