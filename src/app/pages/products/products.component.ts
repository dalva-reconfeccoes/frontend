import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './products.service';
import { Product } from '../../shared/models/product.model';
import { AvailableFilterModel } from '../../shared/models/available-filter.model';
import { FilterProductsModel } from '../../shared/models/filter-products.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    products: Array<Product>;
    page: number = 1;
    pages: number;
    size: number = 6;
    availableFilter: AvailableFilterModel;
    filterProducts: FilterProductsModel;

    constructor(
        private router: Router,
        private service: ProductsService,
        private renderer: Renderer2,
        private el: ElementRef
    ) {}

    ngOnInit() {
        this.filterProducts = new FilterProductsModel();
        this.service.getAvailableFilterProducts().subscribe(
            (availableFilter: AvailableFilterModel) => {
                this.availableFilter = availableFilter;
            },
            (error) => {
                console.log(error);
            }
        );
        this.service.getAllProducts(this.page, this.size).subscribe(
            (products: any) => {
                this.products = products?.items;
                this.pages = products?.pages;
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
        if (avaType?.selected) {
            avaType.selected = false;
            let elemento = this.el.nativeElement.querySelector(
                `${elementId}-${index}`
            );
            elemento.blur();
        } else {
            avaType.selected = true;
        }

        if (avaType?.size) {
            this.verifyItemInArray(this.filterProducts.sizes, avaType.size);
        }
        if (avaType?.type) {
            this.verifyItemInArray(this.filterProducts.types, avaType.type);
        }
        if (avaType?.color) {
            this.verifyItemInArray(this.filterProducts.colors, avaType.color);
        }
        this.updateProducts();
    }

    updateProducts() {
        console.log(this.filterProducts);
        this.service
            .filterProducts(this.filterProducts, this.page, this.size)
            .subscribe(
                (products: any) => {
                    this.products = products.items;
                },
                (error) => {
                    console.log(error);
                }
            );
    }
    verifyItemInArray(array: Array<any>, item: any) {
        let index: number = array.indexOf(item);
        if (index == -1) {
            array.push(item);
        } else {
            array.splice(index, 1);
        }
    }
}
