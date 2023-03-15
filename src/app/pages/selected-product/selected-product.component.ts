import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { List } from 'postcss/lib/list';

@Component({
    selector: 'app-selected-product',
    templateUrl: './selected-product.component.html',
    styleUrls: ['./selected-product.component.scss'],
})
export class SelectedProductComponent {
    product: any;
    image: any;
    cep: string;
    loadingCep: boolean = false;
    isValidCep: boolean = false;
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
    selectedSize: any;
    sizes: any[] = [
        { name: 'PP', code: 1 },
        { name: 'P', code: 2 },
        { name: 'M', code: 3 },
        { name: 'G', code: 4 },
        { name: 'GG', code: 5 },
        { name: 'XGG', code: 6 },
    ];

    displayDialog: boolean = false;
    budget: any;
    totalValue: number;

    constructor(
        private messageService: MessageService,
        private router: Router
    ) {}

    ngOnInit() {
        this.product = {
            uuid: '5ccc2df9-107f-4b63-82a4-5c5ae17cf658',
            name: 'tst6',
            description: 'Camiseta Comum Preta',
            color: 'Preto',
            price: 42.42,
            images: [
                'preto/camiseta-preta-frente-masc.png',
                'preto/camiseta-preta-costas-masc.png',
                'preto/camiseta-preta-modelo-masc.png',
                'preto/camiseta-preta-frente-masc.png',
                'preto/camiseta-preta-costas-masc.png',
                'preto/camiseta-preta-modelo-masc.png',
            ],
            knitted: '100% Algodão',
            type: 'Camiseta',
            subType: 'Comum',
            quantity: 72,
            sex: 'M',
            inventoryStatus: 'DISPONIVEL',
        };
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
