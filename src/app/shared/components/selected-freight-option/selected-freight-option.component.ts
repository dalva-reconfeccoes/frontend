import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectedFreightOptionService } from './selected-freight-option.service';
import { FreightOptionModel } from '../../models/freight-option.model';
import { PaginatorModel } from '../../models/paginator.model';

@Component({
    selector: 'app-selected-freight-option-component',
    templateUrl: './selected-freight-option.component.html',
    styleUrls: ['./selected-freight-option.component.scss'],
})
export class SelectedFreightOptionComponent {
    cepForm: FormGroup;
    loadingCep: boolean = false;
    isValidCep: boolean = false;
    options: Array<FreightOptionModel>;
    @Input() cep: string = '';
    @Input() quantity: number = 1;
    @Input() productType: string = '';
    @Input() submitted = false;
    @Input() selected: FreightOptionModel;
    @Output() onRowSelect = new EventEmitter<any>();
    @Output() validCep = new EventEmitter<string>();

    constructor(private service: SelectedFreightOptionService) {}

    ngOnChanges(changes: SimpleChanges) {
        if (this.isValidCep && changes['quantity']) {
            this.getAllFreightOptions();
        }
    }

    ngOnInit() {
        this.cepForm = this.initCepForm();
        this.setCepValueFromSelected();
        console.log(this.productType);
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
        this.getAllFreightOptions();
    }

    private getAllFreightOptions() {
        this.loadingCep = true;
        this.service
            .getFreightOptions(this.cep, this.quantity, this.productType)
            .subscribe(
                (freightOptions: PaginatorModel) => {
                    console.log(freightOptions);
                    this.loadingCep = false;
                    this.isValidCep = true;
                    this.submitted = false;
                    this.options = freightOptions?.items;
                },
                (error) => {
                    console.log(error);
                    this.loadingCep = false;
                }
            );
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
}
