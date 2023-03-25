import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-second-purchase-steps',
    templateUrl: './second-purchase-steps.component.html',
    styleUrls: ['./second-purchase-steps.component.scss'],
})
export class SecondPurchaseStepsComponent {
    name: string = '';
    number: string = '';
    cvc: string = '';
    maskCvc: string = '';
    expiry: string = '';
    cpf: string = '';

    type: string = '';
    @Output() isValid = new EventEmitter<boolean>();

    focused: string = '';
    creditCardForm: FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private messageService: MessageService
    ) {
        this.creditCardForm = this.getFormBuilder();
    }

    ngOnInit(): void {}

    focusedInput(input: string) {
        this.focused = input;
    }
    getFormBuilder() {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            number: ['', [Validators.required]],
            cvc: ['', [Validators.required]],
            expiry: ['', [Validators.required]],
            cpf: ['', [Validators.required]],
        });
    }

    onTypeCardFound(event) {
        this.type = event;
        console.log('->', this.type);
    }
    get formControl() {
        return this.creditCardForm.controls;
    }

    onSubmitCreditCard(): void {
        this.submitted = true;
        console.log(this.formControl);
        if (this.formControl.number.valid && !this.type) {
            this.showMessage(
                'error',
                'Operadora de cartão inválida.',
                'Por favor, informe um numero de cartão aceito.'
            );
        }
        if (this.creditCardForm.valid) {
            console.log(this.creditCardForm.valid, this.formControl);
            this.isValid.emit(true);
        }
    }
    showMessage(type: string, summary: string, detail: string) {
        this.messageService.add({
            severity: type,
            summary: summary,
            detail: detail,
        });
    }
}
