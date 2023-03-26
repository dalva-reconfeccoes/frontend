import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../../models/login.model';
import { LoginFormErrors } from './login-form-errors';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    loginForm: FormGroup;
    submitted = false;
    newLogin: Login = new Login();
    loginFormErrors: LoginFormErrors;
    @Output() login = new EventEmitter<Login>();

    constructor() {}

    ngOnInit(): void {
        this.loginFormErrors = new LoginFormErrors();
        this.loginForm = this.initLoginForm();
    }

    initLoginForm() {
        return new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
        });
    }
    get formControl() {
        return this.loginForm.controls;
    }

    onSubmitLogin(): void {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.login.emit(this.newLogin);
        }
    }
}
