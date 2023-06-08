import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SelectedFreightOptionService {
    private apiUrl = '/api/address/';

    constructor(private http: HttpClient) {}

    getFreightOptions(cep: string, quantity: number, productType: string) {
        return this.http.post(`${this.apiUrl}calculate-freight-options`, {
            cep: cep,
            quantity: quantity,
            productType: productType,
        });
    }
}
