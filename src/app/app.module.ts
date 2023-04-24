import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { KnobModule } from 'primeng/knob';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { AvatarModule } from 'primeng/avatar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { TagModule } from 'primeng/tag';

import { ProductsComponent } from './pages/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SelectedProductComponent } from './pages/selected-product/selected-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { MobileButtonMenuComponent } from './shared/components/mobile-button-menu/mobile-button-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { DeashboardComponent } from './pages/deashboard/deashboard.component';
import { PurchaseStepsComponent } from './pages/purchase-steps/purchase-steps.component';
import { FirstPurchaseStepsComponent } from './pages/purchase-steps/steps/first-purchase-steps/first-purchase-steps.component';
import { SecondPurchaseStepsComponent } from './pages/purchase-steps/steps/second-purchase-steps/second-purchase-steps.component';
import { ThirdPurchaseStepsComponent } from './pages/purchase-steps/steps/third-purchase-steps/third-purchase-steps.component';
import { CreditCardComponent } from './shared/components/credit-card/credit-card.component';
import { RegisterClientComponent } from './pages/register-client/register-client.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterClientFormComponent } from './shared/components/forms/register-client-form/register-client-form.component';
import { LoginFormComponent } from './shared/components/forms/login-form/login-form.component';
import { SelectedFreightOptionComponent } from './shared/components/selected-freight-option/selected-freight-option.component';
import { AddressFormComponent } from './shared/components/forms/address-form/address-form.component';
import { CreditCardFormComponent } from './shared/components/forms/credit-card-form/credit-card-form.component';
import { VerificationCodeComponent } from './pages/verification-code/verification-code.component';
import { MessagesModule } from 'primeng/messages';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        FooterComponent,
        NavbarComponent,
        HomeComponent,
        ContactComponent,
        SelectedProductComponent,
        CartComponent,
        MobileButtonMenuComponent,
        LoginComponent,
        DeashboardComponent,
        PurchaseStepsComponent,
        FirstPurchaseStepsComponent,
        SecondPurchaseStepsComponent,
        ThirdPurchaseStepsComponent,
        CreditCardComponent,
        RegisterClientComponent,
        ForgotPasswordComponent,
        RegisterClientFormComponent,
        LoginFormComponent,
        SelectedFreightOptionComponent,
        AddressFormComponent,
        CreditCardFormComponent,
        VerificationCodeComponent,
        ResetPasswordComponent,
    ],
    imports: [
        BrowserModule,
        ButtonModule,
        ToolbarModule,
        SplitterModule,
        FlexLayoutModule,
        AppRoutingModule,
        CarouselModule,
        DataViewModule,
        RatingModule,
        DropdownModule,
        FormsModule,
        InputTextModule,
        RippleModule,
        ImageModule,
        BrowserAnimationsModule,
        GalleriaModule,
        CommonModule,
        TabViewModule,
        SelectButtonModule,
        KnobModule,
        InputNumberModule,
        InputMaskModule,
        ToastModule,
        HttpClientModule,
        TableModule,
        DialogModule,
        SidebarModule,
        BadgeModule,
        CardModule,
        ReactiveFormsModule,
        StepsModule,
        PanelModule,
        PasswordModule,
        DividerModule,
        CheckboxModule,
        AvatarModule,
        ProgressSpinnerModule,
        ProgressBarModule,
        MessagesModule,
        ColorPickerModule,
        TagModule,
    ],
    providers: [MessageService],
    bootstrap: [AppComponent],
})
export class AppModule {}
