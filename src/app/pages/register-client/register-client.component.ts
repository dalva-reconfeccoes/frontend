import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterClientModel } from '../../shared/models/register-client.model';
import { CustomValidators } from '../../shared/validators/custom-validators';
import { cl } from '@fullcalendar/core/internal-common';

@Component({
    selector: 'app-register-client',
    templateUrl: './register-client.component.html',
    styleUrls: ['./register-client.component.scss'],
})
export class RegisterClientComponent {
    client: RegisterClientModel;

    constructor(private router: Router) {}
    ngOnInit(): void {}

    setNewClientData(newClient) {
        if (newClient) {
            this.client = newClient;
            console.log(this.client);
            this.navigate('verification-code');
        }
    }

    navigate(id: string) {
        this.router.navigate(['/', id]);
    }
}
