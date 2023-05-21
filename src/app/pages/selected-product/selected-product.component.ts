import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectedProductsService } from './selected-product.service';
import { Product } from '../../shared/models/product.model';
import { Quantity } from '../../shared/models/quantity.model';

@Component({
    selector: 'app-selected-product',
    templateUrl: './selected-product.component.html',
    styleUrls: ['./selected-product.component.scss'],
})
export class SelectedProductComponent {
    product: Product;
    image: any;
    cep: string;
    selectedFreight: any;
    quantitySelected: number = 1;
    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5,
        },
        {
            breakpoint: '768px',
            numVisible: 3,
        },
        {
            breakpoint: '560px',
            numVisible: 3,
        },
    ];
    selectedSize: Quantity;

    displayDialog: boolean = false;
    budget: any;
    totalValue: number;

    constructor(
        private messageService: MessageService,
        private router: Router,
        private activateRoute: ActivatedRoute,
        private service: SelectedProductsService
    ) {}

    ngOnInit() {
        let uuid = this.activateRoute.snapshot.paramMap.get('uuid');
        this.service.getProduct(uuid).subscribe(
            (product: Product) => {
                this.product = product;
                this.selectedSize = this.product.quantities[0];
            },
            (error) => {
                console.log(error);
            }
        );

        this.calculatePrice();
    }

    calculatePrice() {
        this.totalValue = this.product.price * this.quantitySelected;
        if (this.selectedFreight) {
            this.totalValue += this.selectedFreight.value;
        }
    }

    setSelectedFreight(event) {
        this.selectedFreight = event;
        this.calculatePrice();
    }

    buyProduct() {
        if (this.validateSelection()) {
            this.budget = {
                product: this.product,
                selectedSize: this.selectedSize,
                quantitySelected: this.quantitySelected,
                value: this.product.price * this.quantitySelected,
            };
            this.displayDialog = true;
        }
    }

    validateSelection() {
        let isValid = true;
        if (!this.selectedSize) {
            this.showMessage(
                'error',
                'Tamanho não informado',
                'Selecione um tamanho pra continuar.'
            );
            isValid = false;
        }
        return isValid;
    }

    showMessage(type: string, summary: string, detail: string) {
        this.messageService.add({
            severity: type,
            summary: summary,
            detail: detail,
        });
    }

    navigateToProducts() {
        this.setProductLocalStorage();
        this.router.navigate([`/products/`]).then(() => {
            window.location.reload();
        });
    }

    setProductLocalStorage() {
        if (this.selectedFreight) {
            localStorage.setItem(
                'selectedFreight',
                JSON.stringify(this.selectedFreight)
            );
        }
        let cart: Array<any> = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
            localStorage.setItem('cart', JSON.stringify([this.budget]));
            return;
        }
        cart.push(this.budget);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    navigateToCart() {
        this.setProductLocalStorage();
        this.router.navigate([`/cart/`]).then(() => {
            window.location.reload();
        });
    }
}
