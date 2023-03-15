import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cep-component',
    templateUrl: './cep.component.html',
    styleUrls: ['./cep.component.scss'],
})
export class CepComponent {
    loadingCep: boolean = false;
    isValidCep: boolean = false;
    options: any[];
    cep: string;
    @Input() selected: any;
    @Output() onRowSelect = new EventEmitter<any>();

    constructor(private messageService: MessageService) {}
    ngOnInit() {
        this.setCepValueFromSelected();
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

    calculateFreight() {
        this.options = undefined;

        let re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;
        if (re.test(this.cep)) {
            console.log('CEP VALIDO', this.cep);
            this.loadingCep = true;
            var clientCep = this.cep.replace(re, '$1$2$3');
            setTimeout(() => (this.loadingCep = false), 1000);
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
            console.log(clientCep);
        } else {
            console.log('CEP inválido!', this.cep);
            this.messageService.add({
                severity: 'error',
                summary: 'CEP',
                detail: 'Cep inválido!',
            });
        }
    }
}
