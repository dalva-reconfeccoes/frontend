import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SelectedProductComponent } from './pages/selected-product/selected-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { DeashboardComponent } from './pages/deashboard/deashboard.component';
import { PurchaseStepsComponent } from './pages/purchase-steps/purchase-steps.component';
import { RegisterClientComponent } from './pages/register-client/register-client.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerificationCodeComponent } from './pages/verification-code/verification-code.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: `product/:uuid`, component: SelectedProductComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'cart', component: CartComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'register-client', component: RegisterClientComponent },
    { path: 'verification-code', component: VerificationCodeComponent },
    {
        path: 'purchase-steps',
        component: PurchaseStepsComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'dashboard',
        component: DeashboardComponent,
        canActivate: [AuthGuardService],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
