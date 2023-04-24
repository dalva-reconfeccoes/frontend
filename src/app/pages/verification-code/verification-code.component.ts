import { Component } from '@angular/core';
import { ClientModel } from '../../shared/models/client.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VerificationCodeService } from './verification-code.service';
import { BaseResponseModel } from '../../shared/models/base-response.model';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-verification-code',
    templateUrl: './verification-code.component.html',
    styleUrls: ['./verification-code.component.scss'],
})
export class VerificationCodeComponent {
    totalMinutes: number = 5;
    totalSeconds: number = this.totalMinutes * 60;
    secondsLeft: number = this.totalSeconds;
    uuid: string;
    verificationRouter: string;
    code: string;
    client: ClientModel = new ClientModel();
    isVerify: boolean = false;
    resendCode: boolean = false;
    dialogTextDescription: string;
    dialogButtonLabel: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: VerificationCodeService,
        private messageService: MessageService
    ) {
        setInterval(() => {
            this.countDown();
        }, 1000);
    }

    ngOnInit() {
        this.uuid = this.route.snapshot.paramMap.get('uuid');
        this.verificationRouter =
            this.route.snapshot.paramMap.get('verificationRouter');
        this.service.getClient(this.uuid).subscribe(
            (response: ClientModel) => {
                this.client = response;
                // this.service.sendCodeVerification(response.email).subscribe();
            },
            (error) => {
                console.log('-->', error);
            }
        );
    }

    verifyUserCode() {
        if (!this.code || !this.client) {
            return;
        }
        this.service.verifyCode(this.client.email, this.code).subscribe(
            (response: BaseResponseModel) => {
                switch (this.verificationRouter) {
                    case 'new-client':
                        this.setTextDialog();
                        this.isVerify = true;
                    case 'reset-password':
                        console.log(this.isVerify);
                        this.redirectAfterVerify();
                }
            },
            (error) => {
                console.log('-->', error);
                if (error.status == 401) {
                    this.messageService.clear();
                    this.showMessage('error', 'Código inválido', '');
                }
                if (error.status == 400) {
                    this.messageService.clear();
                    this.showMessage('error', 'Código expirado', '');
                }
            }
        );
    }

    setTextDialog() {
        switch (this.verificationRouter) {
            case 'new-client':
                this.dialogTextDescription = 'Realize o acesso em sua conta';
                this.dialogButtonLabel = 'Ir para login';
            case 'reset-password':
                this.dialogTextDescription = 'Cadastre sua nova senha';
                this.dialogButtonLabel = 'Nova senha';
        }
    }
    resendVerificationCode() {
        if (!this.resendCode) {
            this.service
                .sendCodeVerification(this.client.email)
                .subscribe(() => {
                    this.messageService.clear();
                    this.showMessage('success', 'Código reenviado', '');
                    this.totalMinutes = 5;
                    this.totalSeconds = this.totalMinutes * 60;
                    this.secondsLeft = this.totalSeconds;
                });
            this.resendCode = true;
            setInterval(() => {
                this.resendCode = false;
            }, 6000);
        }
    }

    redirectAfterVerify() {
        let redirectRouter: string;

        switch (this.verificationRouter) {
            case 'new-client':
                redirectRouter = '/login';
            case 'reset-password':
                redirectRouter = `/reset-password/${this.code}/${this.client.uuid}`;
        }

        this.router.navigate([redirectRouter]);
    }

    countDown() {
        if (this.secondsLeft > 0) {
            this.secondsLeft--;
        }
    }

    get progress(): number {
        return Math.floor((100 * this.secondsLeft) / this.totalSeconds);
    }
    get minutes(): number {
        return Math.floor(this.secondsLeft / 60);
    }

    get seconds(): number {
        return this.secondsLeft - this.minutes * 60;
    }

    get formatSeconds(): string {
        let seconds = this.seconds;
        if (seconds < 10) {
            return `0${this.seconds}`;
        }
        return `${this.seconds}`;
    }
    get formatMinutes(): string {
        let minutes = this.minutes;
        if (minutes < 10) {
            return `0${this.minutes}`;
        }
        return `${this.minutes}`;
    }

    showMessage(type: string, summary: string, detail: string) {
        this.messageService.add({
            severity: type,
            summary: summary,
            detail: detail,
            life: 5000,
        });
    }
}
