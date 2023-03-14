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
    cep: string

    ngOnInit() {
        this.cart = JSON.parse(localStorage.getItem('cart'));
        this.selectedFreight = JSON.parse(
            localStorage.getItem('selectedFreight')
        );
        this.cep = localStorage.getItem('cep');
        console.log(this.selectedFreight);
        this.calculateTotalValue();
    }
    setSelectedFreight(event){
        this.selectedFreight = event
        this.calculateTotalValue()
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
