import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router'

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss']
})
export class SelectedProductComponent {
  product: any
  image: any
  cep: string
  loadingCep: boolean = false
  isValidCep: boolean = false
  selectedFreight: any
  quantitySelected: number = 1
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 3
    }
  ];
  selectedSize: any
  sizes: any[] = [
    {name: 'PP', code: 1},
    {name: 'P', code: 2},
    {name: 'M', code: 3},
    {name: 'G', code: 4},
    {name: 'GG', code: 5},
    {name: 'XGG', code: 6}
  ];

  freightOptions: any[] = [
    {name: 'SEDEX', value: 32.11, deliveryTime: "3", arrivalDay: "17/03" },
    {name: 'PAC', value: 21.34, deliveryTime: "6", arrivalDay: "20/03"}
  ];

  displayDialog: boolean=false


  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit() {
    this.product = {
      uuid: "5ccc2df9-107f-4b63-82a4-5c5ae17cf658",
      name: "tst6",
      description: "Camiseta Comum Preta",
      color:"Preto",
      price: 121,
      images: [
        "preto/camiseta-preta-frente-masc.png",
        "preto/camiseta-preta-costas-masc.png", 
        "preto/camiseta-preta-modelo-masc.png",
        "preto/camiseta-preta-frente-masc.png",
        "preto/camiseta-preta-costas-masc.png", 
        "preto/camiseta-preta-modelo-masc.png", 
        
      ],
      knitted: "100% Algodão",
      type: "Camiseta",
      subType: "Comum",
      quantity: 72,
      sex: "M",
      inventoryStatus: "DISPONIVEL"
    }
    
  }

  onClick(event){
    console.log(event)
  }

  calculateFreight(){
    this.loadingCep = true
    
    var re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/; // Pode usar ? no lugar do *
    console.log(re.test(this.cep))
    if(re.test(this.cep)){
      console.log("CEP VALIDO", this.cep)
      var clientCep = this.cep.replace(re,"$1$2$3")
      this.isValidCep = true
      console.log(clientCep)
    }else{
      console.log("CEP inválido!", this.cep);
      this.messageService.add({severity:'error', summary:'CEP', detail:'Cep inválido!'})
    }
    setTimeout(() => this.loadingCep = false, 1000);
  }
  
  buyProduct(){
    if(this.validateSelection()){
      this.displayDialog=true
    }
    console.log(this.selectedSize)
    console.log(this.cep)
    console.log(this.selectedFreight)
    console.log(this.quantitySelected)
  }

  validateSelection(){
    var isValid = true
    if(!this.selectedSize){
      this.showMessage("error", "Tamanho não informado","Selecione um tamanho pra continuar.")
      isValid = false 
    }
    return isValid
  }

  showMessage(type: string, summary: string, detail: string){
    this.messageService.add({severity:type, summary:summary, detail:detail})
  }

}
