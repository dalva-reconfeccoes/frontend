import { Component } from '@angular/core';

@Component({
    selector: 'app-verification-code',
    templateUrl: './verification-code.component.html',
    styleUrls: ['./verification-code.component.scss'],
})
export class VerificationCodeComponent {
    totalMinutes: number = 5;
    totalSeconds: number = this.totalMinutes * 60;
    secondsLeft: number = this.totalSeconds;
    valueProgress: number;
    constructor() {
        setInterval(() => {
            this.countDown();
        }, 1000); // 1 segundo
    }

    countDown() {
        if (this.secondsLeft > 0) {
            this.secondsLeft--;
        }
    }

    resendVerificationCode() {
        console.log('Reenviar código de verificação');
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
}
