import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-second-purchase-steps',
    templateUrl: './second-purchase-steps.component.html',
    styleUrls: ['./second-purchase-steps.component.scss'],
})
export class SecondPurchaseStepsComponent {
    name: string;
    number: string = '';
    cvc: string = '';
    expiry: string = '';
    cpf: string = '';
    @Output() isValid = new EventEmitter<boolean>();

    focused: string = '';
    creditCardForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit(): void {
        this.creditCardForm = this.getFormBuilder();
    }

    focusedInput(input: string) {
        this.focused = input;
    }
    getFormBuilder() {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            number: ['', [Validators.required]],
            cvc: ['', [Validators.required]],
            expiry: ['', [Validators.required]],
        });
    }
    get formControl() {
        return this.creditCardForm.controls;
    }
    onSubmitAddress(): void {
        this.submitted = true;
        console.log(this.formControl);
        if (this.creditCardForm.valid) {
            console.log(this.formControl);
        }
    }
}
