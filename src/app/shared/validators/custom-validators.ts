import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';

export class CustomValidators {
    static MatchValidator(source: string, target: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const sourceCtrl = control.get(source);
            const targetCtrl = control.get(target);
            return sourceCtrl &&
                targetCtrl &&
                sourceCtrl.value !== targetCtrl.value
                ? { mismatch: true }
                : null;
        };
    }
    static validateCpf(num: string): boolean {
        return cpf.isValid(num);
    }

    static OnlyStringValidator(source: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
            const sourceValue = control.get(source);
            return !regex.test(sourceValue.value)
                ? { invalidOnlyStrings: true }
                : null;
        };
    }
    static WordsQuantityValidator(
        source: string,
        quantity: number
    ): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let inValid = false;
            const sourceName = control.get(source);
            const stringSplit: [string] = sourceName.value.split(' ');
            let cleanListString = stringSplit.filter(
                (str) => str.trim().length > 0
            );
            if (cleanListString.length < quantity) {
                inValid = true;
            }
            if (cleanListString.some((word) => word.length < 2)) {
                inValid = true;
            }
            return inValid ? { invalidWordsQuantity: true } : null;
        };
    }
}
