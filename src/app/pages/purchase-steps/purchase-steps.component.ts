import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
    isValidStep: boolean = false;
    listSteps: Array<PurchaseStepModel> = this.initSteps();
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit() {
        this.stepClient = 1;
    }

    initSteps() {
        return [
            new PurchaseStepModel(0, false, 'delivery'),
            new PurchaseStepModel(1, false, 'registerPaymentMethod'),
            new PurchaseStepModel(2, false, 'makePayment'),
        ];
    }

    classLineSteps(step: number) {
        if (this.listSteps[step].isValid) {
            return 'valid-step-hr';
        }
        return 'step-hr';
    }
    classButtonSteps(step: number) {
        if (this.listSteps[step].isValid) {
            return 'valid-step-button';
        }
        return 'step-button';
    }

    updateFinishStep(stepIsValid) {
        this.updateElementClassName(
            '#' + this.purchaseStep.type,
            'valid-step-button'
        );
        this.purchaseStep.isValid = stepIsValid;
        this.showSelectedStep(this.stepClient + 1);
    }

    updateElementClassName(id: string, newClassName: string) {
        const elementButton = this.el.nativeElement.querySelector(id);
        elementButton.className = newClassName;
    }

    get purchaseStep() {
        for (let step of this.listSteps) {
            if (step.id == this.stepClient) {
                return step;
            }
        }
    }

    updateSelectedStepClient(selectedStep: number) {
        if (selectedStep < this.listSteps.length) {
            this.stepClient = selectedStep;
        }
    }

    showSelectedStep(selectedStep: number) {
        this.updateSelectedStepClient(selectedStep);
    }
}
