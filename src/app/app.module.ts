import { ProductRepository } from './services/product-repository.service';
import { SpecialsComponent } from './specials/specials.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    SpecialsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [ProductRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
