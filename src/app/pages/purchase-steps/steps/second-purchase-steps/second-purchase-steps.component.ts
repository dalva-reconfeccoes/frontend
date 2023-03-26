import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CreditCardModel } from '../../../../shared/models/credit-card.model';
import { CustomValidators } from '../../../../shared/validators/custom-validators';

@Component({
    selector: 'app-second-purchase-steps',
    templateUrl: './second-purchase-steps.component.html',
    styleUrls: ['./second-purchase-steps.component.scss'],
})
export class SecondPurchaseStepsComponent {
    @Output() isValid = new EventEmitter<boolean>();
    creditCard: CreditCardModel;
    cpf: string = '';
    focused: string = '';
    submitted = false;
    creditCardFormIsValid = false;
    isValidCPF = false;

    constructor(
        private router: Router,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.creditCard = new CreditCardModel();
    }

    validCPF() {
        this.isValidCPF = CustomValidators.validateCpf(this.cpf);
    }

    setCreditCardFormIsValid(isValid) {
        this.creditCardFormIsValid = isValid;
    }

    focusedInput(input: string) {
        this.focused = input;
    }

    onTypeCardFound(event) {
        this.creditCard.type = event;
    }

    onSubmitCreditCard(): void {
        this.submitted = true;
        if (this.validValues()) {
            console.log(this.creditCard);
            this.isValid.emit(true);
        }
    }

    validValues() {
        let isValid = true;
        if (!this.creditCardFormIsValid) {
            isValid = false;
        }
        if (this.creditCard.type === undefined) {
            this.showMessage(
                'error',
                'Operadora de cartão inválida.',
                'Por favor, informe um número de cartão aceito.'
            );
            isValid = false;
        }

        if (!this.isValidCPF) {
            this.showMessage(
                'error',
                'CPF inválido.',
                'Por favor, informe um CPF valido.'
            );
            isValid = false;
        }
        return isValid;
    }

    showMessage(type: string, summary: string, detail: string) {
        this.messageService.add({
            severity: type,
            summary: summary,
            detail: detail,
        });
    }
}
