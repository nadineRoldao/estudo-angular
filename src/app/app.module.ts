import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MyLowsercasePipe } from './pipes/my-lowercase.pipe';
import { ProductService } from './services/product.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';

const pipes = [
  MyLowsercasePipe
]

const directives = [
  CpfMaskDirective
]

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductFormComponent,
    ...pipes,
    ...directives
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
