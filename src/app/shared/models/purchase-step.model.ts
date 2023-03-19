export class PurchaseStepModel {
    id: number = 0;
    isValid: boolean = false;
    type: string = '';
    constructor(id, isValid, type) {
        this.id = id;
        this.isValid = isValid;
        this.type = type;
    }
}
