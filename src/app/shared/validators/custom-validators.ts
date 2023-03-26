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
}
