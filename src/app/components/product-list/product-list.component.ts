import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products!: Product[]

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }

  ngOnDestroy(): void {
    console.log('the component will be destroyed');    
  }

  deleteProductById(event: number): void {
    this.products = this.products.filter(p => p.id !== event)
  }

}
