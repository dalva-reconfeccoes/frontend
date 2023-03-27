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
                name: new FormControl('', [Validators.required]),
                email: new FormControl('', [
                    Validators.required,
                    Validators.email,
                ]),
                password: new FormControl('', [
                    Validators.required,
                    Validators.minLength(8),
                ]),
                confirmPassword: new FormControl('', [Validators.required]),
                isJuridical: new FormControl(false, [Validators.required]),
            },
            [
                CustomValidators.MatchValidator('password', 'confirmPassword'),
                CustomValidators.OnlyStringValidator('name'),
                CustomValidators.WordsQuantityValidator('name', 2),
            ]
        );
    }

    get nameMatchError() {
        let isInvalidName = false;
        let touched = this.registerClientForm.get('name')?.touched;
        if (!touched && this.submitted) {
            isInvalidName = true;
        }
        if (touched) {
            isInvalidName = this.validOnlyString(isInvalidName, touched);
            isInvalidName = this.validQuantityWords(isInvalidName, touched);
        }
        return isInvalidName;
    }

    validOnlyString(isInvalid: boolean, touched: boolean) {
        const errors = this.registerClientForm.getError('invalidOnlyStrings');
        if (errors && touched) {
            this.clientFormErrors.name = 'Nome não pode conter numeros.';
            isInvalid = true;
        }
        return isInvalid;
    }
    validQuantityWords(isInvalid: boolean, touched: boolean) {
        const errors = this.registerClientForm.getError('invalidWordsQuantity');
        if (errors && touched) {
            this.clientFormErrors.name = 'Informe seu nome completo.';
            isInvalid = true;
        }
        return isInvalid;
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
        this.nameMatchError;
        if (this.registerClientForm.valid) {
            this.client.emit(this.newClient);
        }
    }
}
