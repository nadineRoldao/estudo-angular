import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
    { id: 1, name: 'notebook', category: 'eletronic', price: 2000},
    { id: 2, name: 'iphone', category: 'eletronic', price: 3000 },
    { id: 3, name: 'PS5', category: 'GAMING', price: 5000 }
  ]

  deleteProductById(event: number): void {
    this.products = this.products.filter(p => p.id !== event)
  }

}
