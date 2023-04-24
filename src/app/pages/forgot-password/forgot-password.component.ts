import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordService } from './forgot-password.service';
import { ClientModel } from '../../shared/models/client.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
    email: string = '';
    forgotPasswordForm: FormGroup;
    submitted = false;

    constructor(
        private router: Router,
        private messageService: MessageService,
        private service: ForgotPasswordService
    ) {}

    ngOnInit() {
        this.forgotPasswordForm = this.initForgotPasswordForm();
    }
    initForgotPasswordForm() {
        return new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
        });
    }

    onSubmitEmail() {
        this.submitted = true;
        this.messageService.clear();
        if (this.forgotPasswordForm.valid) {
            this.service.getClientByEmail(this.email).subscribe(
                (registeredClient: ClientModel) => {
                    this.navigateToVerificationCode(registeredClient.uuid);
                },
                (error) => {
                    this.findClientErrors(error);
                }
            );
        }
    }
    get formControl() {
        return this.forgotPasswordForm.controls;
    }

    private findClientErrors(error) {
        if (error.status == 404) {
            this.showMessage('error', 'E-mail não cadastrado.', '');
        }
    }

    navigateToVerificationCode(uuid: string) {
        this.router.navigate([`/verification-code/`, 'reset-password', uuid]);
    }

    showMessage(type: string, summary: string, detail: string) {
        this.messageService.add({
            severity: type,
            summary: summary,
            detail: detail,
        });
    }
}
