import { Component } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    cart: Array<any>;
    selectedFreight: any;
    totalValue: number;
    cep: string;

    ngOnInit() {
        this.setCart(JSON.parse(this.getLocalStorageData('cart')));
        this.setSelectedFreight(
            JSON.parse(this.getLocalStorageData('selectedFreight'))
        );
        this.calculateTotalValue();
    }

    setCart(value) {
        if (value) {
            this.cart = value;
        }
    }

    setSelectedFreight(value: any) {
        if (value) {
            this.selectedFreight = value;
            this.setCepValue(this.selectedFreight.cep);
        }
    }
    setCepValue(value: string) {
        if (value) {
            this.cep = value;
        }
    }

    getLocalStorageData(key: string) {
        let item = localStorage.getItem(key);
        if (item) {
            return item;
        }
        return undefined;
    }
    setSelectedFreightFromEvent(event) {
        this.selectedFreight = event;
        this.calculateTotalValue();
    }

    getImageProduct(product) {
        return product.images[0];
    }

    calculateTotalValue() {
        this.totalValue = 0;
        for (let index = 0; index < this.cart.length; index++) {
            var element = this.cart[index];
            this.totalValue += element.value;
        }

        if (this.selectedFreight) {
            this.totalValue += this.selectedFreight.value;
        }
    }
}
