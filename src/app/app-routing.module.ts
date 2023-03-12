import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent} from './products/products.component'
import { HomeComponent} from './home/home.component'
import { ContactComponent} from './contact/contact.component'
import { SelectedProductComponent } from './selected-product/selected-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },    
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: `product/:uuid`, component: SelectedProductComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
