import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressModel } from '../../../models/address.model';
import { AddressFormErrors } from './address-form-errors';

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent {
    addressForm: FormGroup;
    addressErros: AddressFormErrors;
    @Input() submitted: boolean;
    @Input() newAddress: AddressModel;
    @Output() addressFormEvent = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit(): void {
        this.addressErros = new AddressFormErrors();
        this.addressForm = this.initAddressForm();
    }

    checkFormIsValid(): void {
        this.addressFormEvent.emit(this.addressForm.valid);
    }

    initAddressForm() {
        return new FormGroup({
            streetName: new FormControl('', [Validators.required]),
            neighborhood: new FormControl('', [Validators.required]),
            state: new FormControl('', [Validators.required]),
            number: new FormControl('', [Validators.required]),
            complement: new FormControl('', [Validators.required]),
        });
    }

    get formControl() {
        return this.addressForm.controls;
    }
}
