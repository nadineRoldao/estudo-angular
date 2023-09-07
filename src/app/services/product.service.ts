import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable(
    // { providedIn: 'root' } // auto import no module principal
)
export class ProductService {

    constructor(private httpClient: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('http://localhost:3030/products')
    }

}
