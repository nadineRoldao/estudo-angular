import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
    selector: 'product-item',
    templateUrl: 'product-item.component.html',
    styleUrls: ['product-item.component.css']
})
export class ProductItemComponent {

    // from parent to child
    @Input()
    product!: Product

    // from child to parent
    @Output()
    deleteProductEmitter: EventEmitter<number> = new EventEmitter()

    deleteProduct(): void {
        console.log('delete item has been called');
        this.deleteProductEmitter.emit(this.product.id)
    }

}
