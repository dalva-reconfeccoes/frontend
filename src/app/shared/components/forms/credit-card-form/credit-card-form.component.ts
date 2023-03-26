import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditCardFormErrors } from './credit-card-form-errors';
import { CreditCardModel } from '../../../models/credit-card.model';

@Component({
    selector: 'app-credit-card-form',
    templateUrl: './credit-card-form.component.html',
    styleUrls: ['./credit-card-form.component.scss'],
})
export class CreditCardFormComponent {
    creditCardForm: FormGroup;
    creditCardErros: CreditCardFormErrors;
    @Input() submitted: boolean;
    @Input() creditCard: CreditCardModel;
    @Output() isValidFormEvent = new EventEmitter<boolean>();
    @Output() focusedEvent = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {
        this.creditCardErros = new CreditCardFormErrors();
        this.creditCardForm = this.initCreditCardForm();
    }

    checkFormIsValid(): void {
        this.isValidFormEvent.emit(this.creditCardForm.valid);
    }

    initCreditCardForm() {
        return new FormGroup({
            name: new FormControl('', [Validators.required]),
            number: new FormControl('', [Validators.required]),
            cvc: new FormControl('', [Validators.required]),
            expiry: new FormControl('', [Validators.required]),
        });
    }

    get formControl() {
        return this.creditCardForm.controls;
    }
    focusedInput(input: string) {
        this.focusedEvent.emit(input);
    }
}
