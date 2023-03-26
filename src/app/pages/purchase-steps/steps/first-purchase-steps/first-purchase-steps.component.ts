import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AddressModel } from '../../../../shared/models/address.model';

@Component({
    selector: 'app-first-purchase-steps',
    templateUrl: './first-purchase-steps.component.html',
    styleUrls: ['./first-purchase-steps.component.scss'],
})
export class FirstPurchaseStepsComponent {
    @Output() isValid = new EventEmitter<boolean>();
    address: AddressModel;
    addressFormIsValid: boolean;

    submitted = false;

    selectedFreight: any;
    // addressForm: FormGroup;
    isSelectedFreight: boolean;
    constructor(
        private router: Router,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.address = new AddressModel();
    }
    addCepAddress(cep) {
        if (cep) {
            this.address.cep = cep;
        }
    }

    setSelectedFreight(event) {
        this.selectedFreight = event;
    }

    setAddressFormIsValid(isValid) {
        this.addressFormIsValid = isValid;
    }

    onSubmitAddress(): void {
        this.submitted = true;
        this.isSelectedFreight = true;
        if (this.validValues()) {
            console.log(this.address);
            this.isValid.emit(true);
        }
    }

    validValues() {
        let isValid = true;

        if (!this.addressFormIsValid || this.address.cep === '') {
            this.showMessage(
                'error',
                'Endereço não informado',
                'Favor, informe seus dados de entrega.'
            );
            isValid = false;
        }
        if (!this.selectedFreight && this.address.cep !== '') {
            this.isSelectedFreight = false;
            this.showMessage(
                'error',
                'Frete não informado',
                'Selecione uma opção de entrega pra continuar.'
            );
            isValid = false;
        }

        if (!this.address) {
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
