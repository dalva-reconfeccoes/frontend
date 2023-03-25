import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterClientModel } from '../../../models/register-client.model';
import { CustomValidators } from '../../../validators/custom-validators';
import { RegisterClientFormErrors } from './register-client-form-errors';

@Component({
    selector: 'app-register-client-form',
    templateUrl: './register-client-form.component.html',
    styleUrls: ['./register-client-form.component.scss'],
})
export class RegisterClientFormComponent {
    registerClientForm: FormGroup;
    checked: boolean = false;
    newClient: RegisterClientModel;
    clientFormErrors: RegisterClientFormErrors;
    submitted = false;
    @Output() client = new EventEmitter<RegisterClientModel>();

    constructor() {}
    ngOnInit(): void {
        this.newClient = new RegisterClientModel();
        this.clientFormErrors = new RegisterClientFormErrors();
        this.registerClientForm = this.initRegisterClientForm();
    }

    initRegisterClientForm() {
        return new FormGroup(
            {
                email: new FormControl('', [Validators.required]),
                name: new FormControl('', [Validators.required]),
                password: new FormControl('', [Validators.required]),
                confirmPassword: new FormControl('', [Validators.required]),
                isJuridical: new FormControl(false, [Validators.required]),
            },
            [CustomValidators.MatchValidator('password', 'confirmPassword')]
        );
    }

    get passwordMatchError() {
        let isInvalidPassword = false;
        const verification =
            this.registerClientForm.getError('mismatch') &&
            this.registerClientForm.get('confirmPassword')?.touched;

        if (verification) {
            isInvalidPassword = true;
            this.clientFormErrors.confirmPassword =
                'Senha de confirmação divergente.';
        }
        return isInvalidPassword;
    }
    get formControl() {
        return this.registerClientForm.controls;
    }
    onSubmitRegisterClient(): void {
        this.submitted = true;
        if (this.registerClientForm.valid) {
            this.client.emit(this.newClient);
        }
    }
}
