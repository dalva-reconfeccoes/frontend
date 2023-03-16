import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Login } from '../../shared/models/login.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormGroup;
    submitted = false;
    login: Login = new Login();

    constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    get formControl() {
        return this.loginForm.controls;
    }

    onSubmitLogin(): void {
        this.submitted = true;
        console.log(this.formControl.email.errors);
        if (this.loginForm.valid) {
            this.login.email = this.formControl.email.value;
            this.login.password = this.formControl.password.value;
            this.navigate('dashboard');
        }
    }

    navigate(id: string) {
        this.router.navigate(['/', id]);
    }
}
