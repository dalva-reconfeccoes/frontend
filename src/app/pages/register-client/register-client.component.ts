import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClientModel } from '../../shared/models/client.model';
import { CustomValidators } from '../../shared/validators/custom-validators';
import { cl } from '@fullcalendar/core/internal-common';
import { RegisterClientService } from './register-client.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-register-client',
    templateUrl: './register-client.component.html',
    styleUrls: ['./register-client.component.scss'],
})
export class RegisterClientComponent {
    client: ClientModel;

    constructor(
        private router: Router,
        private registerClientService: RegisterClientService,
        private messageService: MessageService
    ) {}
    ngOnInit(): void {}

    setNewClientData(newClient) {
        if (newClient) {
            this.client = newClient;
            this.registerClient();
        }
    }

    private registerClient() {
        this.registerClientService.newClient(this.client).subscribe(
            (registeredClient: ClientModel) => {
                this.navigateToVerificationCode(registeredClient.uuid);
            },
            (error) => {
                this.registerClientErros(error);
            }
        );
    }

    private registerClientErros(error) {
        if (
            error.status == 400 &&
            error.error.detail == 'Email already exists'
        ) {
            this.showMessage(
                'error',
                'E-mail já cadastrado',
                'Verifique seu email.'
            );
        }
    }

    navigateToVerificationCode(uuid: string) {
        this.router.navigate([`/verification-code/`, uuid]);
    }

    showMessage(type: string, summary: string, detail: string) {
        this.messageService.add({
            severity: type,
            summary: summary,
            detail: detail,
        });
    }
}
