import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PurchaseStepModel } from '../../shared/models/purchase-step.model';

@Component({
    selector: 'app-purchase-steps',
    templateUrl: './purchase-steps.component.html',
    styleUrls: ['./purchase-steps.component.scss'],
})
export class PurchaseStepsComponent {
    items: MenuItem[];
    stepClient: number = 0;
    listSteps: Array<number> = [0, 1, 2];
    constructor(private router: Router) {}

    ngOnInit() {
        this.stepClient = 0;
    }

    getSteps() {
        return [
            new PurchaseStepModel(0, false, 'delivery'),
            new PurchaseStepModel(1, false, 'registerPaymentMethod'),
            new PurchaseStepModel(2, false, 'makePayment'),
        ];
    }

    updateStepClient(selectedStep: number) {
        if (selectedStep < this.listSteps.length) {
            this.stepClient = selectedStep;
        }
    }

    showForm(selectedStep: number) {
        this.updateStepClient(selectedStep);
    }
}
