import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FilterProductsModel } from '../../shared/models/filter-products.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private apiUrl = '/api/products/';

    constructor(private http: HttpClient) {}

    getAllProducts(page: number, size: number): Observable<any> {
        return this.http.get(this.apiUrl, {
            params: {
                page: page,
                size: size,
            },
        });
    }

    getAvailableFilterProducts(): Observable<any> {
        return this.http.get(`${this.apiUrl}available/filter`);
    }

    filterProducts(filter: FilterProductsModel, page: number, size: number) {
        return this.http.post(`${this.apiUrl}filter`, filter, {
            params: {
                page: page,
                size: size,
            },
        });
    }
}
