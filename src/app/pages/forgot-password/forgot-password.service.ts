import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ForgotPasswordService {
    private apiUrl = '/api/clients/';

    constructor(private http: HttpClient) {}

    getClientByEmail(email: string): Observable<any> {
        const url = `${this.apiUrl}/email/`;
        return this.http.get(url, {
            params: {
                email: email,
            },
        });
    }
}
