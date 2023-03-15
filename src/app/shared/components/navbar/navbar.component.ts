import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    cart: Array<any>;
    showMobileButton: boolean = false;
    totalItemsCart: string;

    constructor(private router: Router) {}

    ngOnInit() {
        this.verifyScreenSize();
        this.totalItemsCart = this.getTotalItemsCart();
    }

    verifyScreenSize() {
        if (window.innerWidth < 768) {
            this.showMobileButton = true;
        } else {
            this.showMobileButton = false;
        }
    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.verifyScreenSize();
    }

    navigate(id: string) {
        this.router.navigate(['/', id]);
    }

    getTotalItemsCart() {
        this.cart = JSON.parse(this.getLocalStorageData('cart'));
        if (this.cart) {
            return this.cart.length.toString();
        }
        return;
    }

    getLocalStorageData(key: string) {
        let item = localStorage.getItem(key);
        if (item) {
            return item;
        }
        return undefined;
    }
}
