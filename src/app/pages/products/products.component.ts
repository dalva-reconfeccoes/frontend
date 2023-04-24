import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './products.service';
import { Product } from '../../shared/models/product.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    products: Array<Product>;
    page: number = 1;
    size: number = 12;
    availableColors = [
        {
            color: '#000000',
            selected: false,
        },
        {
            color: '#706e6b',
            selected: false,
        },
        {
            color: '#f9f9f9',
            selected: false,
        },
    ];
    availableTypes = [
        {
            type: 'Básica',
            selected: true,
        },
        {
            type: 'Polo',
            selected: false,
        },
        {
            type: 'Raglan',
            selected: false,
        },
    ];
    availableSize = [
        {
            size: 'PP',
            selected: true,
        },
        {
            size: 'P',
            selected: false,
        },
        {
            size: 'M',
            selected: false,
        },
        {
            size: 'G',
            selected: false,
        },
        {
            size: 'GG',
            selected: false,
        },
        {
            size: 'XG',
            selected: false,
        },
        {
            size: 'XXG',
            selected: false,
        },
    ];

    constructor(
        private router: Router,
        private service: ProductsService,
        private renderer: Renderer2,
        private el: ElementRef
    ) {}

    ngOnInit() {
        this.service.getAllProducts(this.page, this.size).subscribe(
            (products: any) => {
                console.log(products);
                this.products = products.items;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    navigateToProduct(product) {
        console.log(product);
        this.router.navigate([`/product/`, product.uuid]);
    }
    classSelectFilter(avaType: any, index: number, elementId: string) {
        if (avaType.selected) {
            avaType.selected = false;
            let elemento = this.el.nativeElement.querySelector(
                `${elementId}-${index}`
            );
            elemento.blur();
        } else {
            avaType.selected = true;
        }
    }
}
