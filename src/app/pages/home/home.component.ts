import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: any;

	responsiveOptions;

	constructor() {
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '420px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
		this.products = [
      {
        name: "tst1",
        price: 123,
        image: "modelo-camiseta-branca-masc.jpg"
      },
      {
        name: "tst2",
        price: 321,
        image: "modelo-camiseta-cinza-masc.jpg"
      },

      {
        name: "tst3",
        price: 231,
        image: "modelo-camiseta-feminina.jpg"
      },

      {
        name: "tst4",
        price: 421,
        image: "modelo-camiseta-preta-masc.jpg"
      },

      {
        name: "tst5",
        price: 121,
        image: "modelo-moletom-branco.jpg"
      }
    ];
  }
}
