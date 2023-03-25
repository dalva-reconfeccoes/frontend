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
    login: Login;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    setNewLoginData(newLogin) {
        if (newLogin) {
            this.login = newLogin;
            console.log(this.login);
            this.navigate('dashboard');
        }
    }

    navigate(id: string) {
        this.router.navigate(['/', id]);
    }
}
