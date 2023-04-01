import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = '/api/clients/login';

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<any> {
        return this.http.post(this.apiUrl, { email, password }).pipe(
            tap((response: any) => {
                localStorage.setItem('auth_token', response.accessToken);
            })
        );
    }

    logout(): void {
        localStorage.removeItem('auth_token');
    }

    getToken(): string {
        return localStorage.getItem('auth_token');
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }
}
