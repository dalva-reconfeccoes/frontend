import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ClientModel } from '../../shared/models/client.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RegisterClientService {
    private apiUrl = '/api/clients/';

    constructor(private http: HttpClient) {}

    newClient(client: ClientModel): Observable<any> {
        return this.http.post(this.apiUrl, client);
    }
}
