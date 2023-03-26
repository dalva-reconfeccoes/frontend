import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-selected-freight-option-component',
    templateUrl: './selected-freight-option.component.html',
    styleUrls: ['./selected-freight-option.component.scss'],
})
export class SelectedFreightOptionComponent {
    cepForm: FormGroup;
    loadingCep: boolean = false;
    isValidCep: boolean = false;
    options: any[];
    cep: string = '';
    @Input() submitted = false;
    @Input() selected: any;
    @Output() onRowSelect = new EventEmitter<any>();
    @Output() validCep = new EventEmitter<string>();

    constructor() {}
    ngOnInit() {
        this.cepForm = this.initCepForm();
        this.setCepValueFromSelected();
    }

    initCepForm() {
        return new FormGroup({
            cep: new FormControl('', [Validators.required]),
        });
    }
    onSubmit() {
        this.options = undefined;
        this.submitted = true;
        this.isValidCep = false;

        if (!this.cepForm.valid) {
            return;
        }

        this.loadingCep = true;
        setTimeout(() => {
            this.getFreightOptions();
            this.loadingCep = false;
        }, 1000);
    }

    updateCepValue() {
        const validCep = this.cleanCep();
        this.validCep.emit(validCep);
    }

    cleanCep() {
        let re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;
        return this.cep.replace(re, '$1$2$3');
    }

    get formControl() {
        return this.cepForm.controls;
    }

    onClickRow() {
        this.onRowSelect.emit(this.selected);
    }

    setCepValueFromSelected() {
        if (this.selected) {
            this.setCepValue(this.selected.cep);
        }
    }

    setCepValue(value: string) {
        if (value) {
            this.cep = value;
        }
    }

    getFreightOptions() {
        this.options = [
            {
                name: 'SEDEX',
                value: 32.11,
                deliveryTime: '3',
                arrivalDay: '17/03',
                cep: '71982-780',
            },
            {
                name: 'PAC',
                value: 21.34,
                deliveryTime: '6',
                arrivalDay: '20/03',
                cep: '71982-780',
            },
        ];
        this.isValidCep = true;
    }
}
