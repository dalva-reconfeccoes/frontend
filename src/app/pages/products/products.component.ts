import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    products: any;

    constructor(private router: Router) {}

    ngOnInit() {
        this.products = [
            {
                uuid: '5ccc2df9-107f-4b63-82a4-5c5ae17cf658',
                header: 'Camiseta Preta',
                description:
                    'Produto de alta qualidade, macia ao toque e resistente ao uso diário. A cor preta é elegante e versátil, combinando com diferentes estilos e ocasiões. Além disso, sua modelagem clássica garante um caimento perfeito no corpo.',
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
                quantity: 77,
                sex: 'M',
                inventoryStatus: 'DISPONIVEL',
            },

            {
                uuid: '95974ea0-c634-4ccb-9b97-d1324ff833cb',
                header: 'Camiseta Branca',
                color: 'Branco',
                price: 22.12,
                images: [
                    'branco/camiseta-branca-frente-masc.png',
                    'branco/camiseta-branca-costas-masc.png',
                    'branco/camiseta-branca-modelo-masc.png',
                    'branco/camiseta-branca-frente-masc.png',
                    'branco/camiseta-branca-costas-masc.png',
                    'branco/camiseta-branca-modelo-masc.png',
                ],
                knitted: '100% Algodão',
                type: 'Camiseta',
                subType: 'Comum',
                quantity: 30,
                sex: 'M',
                inventoryStatus: 'DISPONIVEL',
            },

            {
                uuid: 'b7c48c9d-48b2-48ee-88e4-ce716946602d',
                header: 'Camiseta Cinza',
                color: 'Cinza',
                price: 35.1,
                images: [
                    'cinza/camiseta-cinza-frente-masc.png',
                    'cinza/camiseta-cinza-costas-masc.png',
                    'cinza/camiseta-cinza-modelo-masc.png',
                    'cinza/camiseta-cinza-frente-masc.png',
                    'cinza/camiseta-cinza-costas-masc.png',
                    'cinza/camiseta-cinza-modelo-masc.png',
                ],
                knitted: '100% Algodão',
                type: 'Camiseta',
                subType: 'Comum',
                quantity: 42,
                sex: 'M',
                inventoryStatus: 'DISPONIVEL',
            },
            {
                uuid: '5ccc2df9-107f-4b63-82a4-5c5ae17cf658',
                header: 'Camiseta Preta',
                color: 'Preto',
                price: 25.19,
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
                quantity: 77,
                sex: 'M',
                inventoryStatus: 'DISPONIVEL',
            },

            {
                uuid: '95974ea0-c634-4ccb-9b97-d1324ff833cb',
                header: 'Camiseta Branca',
                color: 'Branco',
                price: 31.33,
                images: [
                    'branco/camiseta-branca-frente-masc.png',
                    'branco/camiseta-branca-costas-masc.png',
                    'branco/camiseta-branca-modelo-masc.png',
                    'branco/camiseta-branca-frente-masc.png',
                    'branco/camiseta-branca-costas-masc.png',
                    'branco/camiseta-branca-modelo-masc.png',
                ],
                knitted: '100% Algodão',
                type: 'Camiseta',
                subType: 'Comum',
                quantity: 30,
                sex: 'M',
                inventoryStatus: 'DISPONIVEL',
            },

            {
                uuid: 'b7c48c9d-48b2-48ee-88e4-ce716946602d',
                header: 'Camiseta Cinza',
                color: 'Cinza',
                price: 55.11,
                images: [
                    'cinza/camiseta-cinza-frente-masc.png',
                    'cinza/camiseta-cinza-costas-masc.png',
                    'cinza/camiseta-cinza-modelo-masc.png',
                    'cinza/camiseta-cinza-frente-masc.png',
                    'cinza/camiseta-cinza-costas-masc.png',
                    'cinza/camiseta-cinza-modelo-masc.png',
                ],
                knitted: '100% Algodão',
                type: 'Camiseta',
                subType: 'Comum',
                quantity: 42,
                sex: 'M',
                inventoryStatus: 'DISPONIVEL',
            },
        ];
    }

    navigateToProduct(product) {
        console.log(product);
        this.router.navigate([`/product/`, product.uuid]);
    }
}
