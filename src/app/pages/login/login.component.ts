import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Login } from '../../shared/models/login.model';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    login: Login;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {}

    setNewLoginData(newLogin) {
        if (newLogin) {
            this.login = newLogin;
            this.authService
                .login(this.login.email, this.login.password)
                .subscribe((response) => {
                    this.navigate('dashboard');
                });
        }
    }

    navigate(id: string) {
        this.router.navigate(['/', id]);
    }
}
