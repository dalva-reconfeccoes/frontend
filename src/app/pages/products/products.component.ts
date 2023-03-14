import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;

  sortOptions: any;

  sortOrder: number;

  sortField: string;

  sortKey: any

	constructor(private router: Router) {

	}

	ngOnInit() {
    this.products = [
      {
        uuid: "95974ea0-c634-4ccb-9b97-d1324ff833cb",
        price: 123,
        image: "camiseta-amarela-frente-costa-masc.jpg",
        knitted: "100% Algodão",
        type: "Camiseta",
        subType: "Comum",
        quantity: 100,
        sex: "M",
        inventoryStatus: "DISPONIVEL"
      },
      {
        uuid: "b7c48c9d-48b2-48ee-88e4-ce716946602d",
        name: "tst2",
        price: 321,
        image: "camiseta-azul-frente-costa-masc.jpg",
        knitted: "100% Algodão",
        type: "Camiseta",
        subType: "Comum",
        quantity: 43,
        sex: "M",
        inventoryStatus: "DISPONIVEL"
      },

      {
        uuid: "52242525-2f55-4c98-8f6d-c2588023f5a4",
        name: "tst3",
        price: 231,
        image: "camiseta-azul-roial-frente-costa-masc.jpg",
        knitted: "100% Algodão",
        type: "Camiseta",
        subType: "Comum",
        quantity: 23,
        sex: "M",
        inventoryStatus: "DISPONIVEL"
      },

      {
        uuid: "580176c8-e865-4214-94c5-fc39e935c1a9",
        name: "tst4",
        price: 421,
        image: "camiseta-branca-frente-costa-masc.jpg",
        knitted: "100% Algodão",
        type: "Camiseta",
        subType: "Comum",
        quantity: 22,
        sex: "M",
        inventoryStatus: "DISPONIVEL"
      },

      {
        uuid: "832f96ce-b222-4aa5-96e0-0f883ebfe42c",
        name: "tst5",
        price: 121,
        image: "camiseta-laranja-frente-costa-masc.jpg",
        knitted: "100% Algodão",
        type: "Camiseta",
        subType: "Comum",
        quantity: 11,
        sex: "M",
        inventoryStatus: "DISPONIVEL"
      }
      ,

      {
        uuid: "5ccc2df9-107f-4b63-82a4-5c5ae17cf658",
        name: "tst6",
        price: 121,
        image: "camiseta-preta-frente-costa-masc.jpg",
        knitted: "100% Algodão",
        type: "Camiseta",
        subType: "Comum",
        quantity: 72,
        sex: "M",
        inventoryStatus: "DISPONIVEL"
      }
    ];
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  navigateToProduct(product){
    console.log(product)
    this.router.navigate([`/product/`,  product.uuid]);
  }
}
