import { Component } from '@angular/core';
import { Login } from '../../shared/models/login.model';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    login: Login;

    constructor(
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {}

    setNewLoginData(newLogin) {
        if (newLogin) {
            this.login = newLogin;
            this.authService
                .login(this.login.email, this.login.password)
                .subscribe(
                    (response) => {
                        this.navigate('dashboard');
                    },
                    (error) => {
                        console.log('-->', error);
                        if (error.status == 404 || error.status == 400) {
                            this.showMessage(
                                'error',
                                'Dados inválidos',
                                'Verifique seu email e senha.'
                            );
                        }
                    }
                );
        }
    }

    navigate(id: string) {
        this.router.navigate(['/', id]);
    }

    showMessage(type: string, summary: string, detail: string) {
        this.messageService.add({
            severity: type,
            summary: summary,
            detail: detail,
            life: 3000,
        });
    }
}
