import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-first-purchase-steps',
    templateUrl: './first-purchase-steps.component.html',
    styleUrls: ['./first-purchase-steps.component.scss'],
})
export class FirstPurchaseStepsComponent {
    addressForm: FormGroup;
    selectedFreight: any;

    @Output() isValid = new EventEmitter<boolean>();
    submitted = false;

    constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit(): void {
        this.addressForm = this.getFormBuilder();
    }

    setSelectedFreight(event) {
        this.selectedFreight = event;
    }

    getFormBuilder() {
        return this.formBuilder.group({
            streetName: ['', [Validators.required]],
            neighborhood: ['', [Validators.required]],
            state: ['', [Validators.required]],
            number: ['', [Validators.required]],
            complement: ['', [Validators.required]],
        });
    }
    get formControl() {
        return this.addressForm.controls;
    }
    onSubmitAddress(): void {
        this.submitted = true;
        console.log(this.formControl);
        if (this.addressForm.valid && this.selectedFreight) {
            console.log('valid->', this.formControl);
            this.isValid.emit(true);
        }
    }
}
