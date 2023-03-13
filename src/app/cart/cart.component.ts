import { Component } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    cart: Array<any>;
    ngOnInit() {
        this.cart = JSON.parse(localStorage.getItem('cart'));
        console.log(this.cart);
    }
}
