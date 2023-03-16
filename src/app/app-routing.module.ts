import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SelectedProductComponent } from './pages/selected-product/selected-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: `product/:uuid`, component: SelectedProductComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'cart', component: CartComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
