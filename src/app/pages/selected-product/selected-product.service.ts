import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SelectedProductsService {
    private apiUrl = '/api/products/';

    constructor(private http: HttpClient) {}

    getProduct(uuid: string): Observable<any> {
        return this.http.get(`${this.apiUrl}${uuid}`);
    }
}
