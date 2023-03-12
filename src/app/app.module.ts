import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ButtonModule } from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ToolbarModule} from 'primeng/toolbar';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {CarouselModule} from 'primeng/carousel';
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import { SelectedProductComponent } from './selected-product/selected-product.component';
import {ImageModule} from 'primeng/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleriaModule } from 'primeng/galleria';

import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import {SelectButtonModule} from 'primeng/selectbutton';
import {KnobModule} from 'primeng/knob';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    SelectedProductComponent,

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
    HttpClientModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
