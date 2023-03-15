import { Component } from '@angular/core';
import { cloneDeep } from 'lodash';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    cart: Array<any>;
    isAllSelected: boolean;
    isShowItems: boolean;
    selectedFreight: any;
    totalValue: number;
    cep: string;

    selectedItems: Array<any> = [];

    ngOnInit() {
        this.serializerDataFromLocalStorage();
        this.calculateTotalValue();
        this.isAllSelected = false;
    }

    serializerDataFromLocalStorage() {
        let cart = this.getLocalStorageData('cart');
        if (cart) {
            this.setCart(JSON.parse(cart));
        }
        let freight = this.getLocalStorageData('selectedFreight');
        if (freight) {
            this.setSelectedFreight(JSON.parse(freight));
        }
    }

    removeSelectedItems() {
        let newCartArray: Array<any> = [];
        for (let item of this.cart) {
            let itemsSelect = this.selectedItems.find((e) => e === item);
            if (!itemsSelect) {
                newCartArray.push(item);
            }
        }
        this.cart = cloneDeep(newCartArray);
        if (this.cart.length == 0) {
            this.isShowItems = false;
        }
        this.updateLocalStorage();
    }

    updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        window.location.reload();
    }
    selectAllItems() {
        if (this.isAllSelected) {
            this.isAllSelected = false;
            this.selectedItems = [];
            return;
        }
        this.isAllSelected = true;
        this.selectedItems = this.cart;
    }
    selectItem(item) {
        let product = this.selectedItems.find((e) => e === item);

        if (product && this.selectedItems.length > 0) {
            if (product) {
                this.selectedItems.splice(product, 1);
                return;
            }
        }
        this.selectedItems.push(item);
    }

    setCart(value) {
        if (value) {
            this.cart = value;
            if (this.cart.length > 0) {
                this.isShowItems = true;
            }
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
            let element = this.cart[index];
            this.totalValue += element.value;
        }

        if (this.selectedFreight) {
            this.totalValue += this.selectedFreight.value;
        }
    }
}
