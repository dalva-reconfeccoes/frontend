import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class VerificationCodeService {
    private apiUrl = '/api/clients';

    constructor(private http: HttpClient) {}

    getClient(uuid: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/${uuid}`);
    }

    sendCodeVerification(email: string): Observable<any> {
        const url = `${this.apiUrl}/verification`;
        return this.http.post(url, { email: email });
    }
    verifyCode(email: string, code: string): Observable<any> {
        const url = `${this.apiUrl}/verify`;
        return this.http.post(url, { email: email, code: code });
    }
}
