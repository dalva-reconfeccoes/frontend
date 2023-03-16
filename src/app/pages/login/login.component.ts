import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Login } from './login.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormGroup;
    submitted = false;
    login: Login = new Login();

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: [this.login.email, [Validators.email, Validators.required]],
            password: [this.login.password, [Validators.required]],
        });
    }

    get formControl() {
        console.log(this.loginForm.controls);
        return this.loginForm.controls;
    }

    onSubmitLogin(): void {
        this.submitted = true;
        console.log(this.formControl.email.errors);
        if (this.loginForm.valid) {
            console.log(this.login);
        }
    }
}
