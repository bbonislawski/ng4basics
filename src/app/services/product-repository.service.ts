import { Injectable } from '@angular/core';
import { Product } from '../models/products-models';
import { productsData } from '../config/product.config';

@Injectable()
export class ProductRepository {
  public productsData = productsData;

  public getProducts(special = false): Array<Product> {
    return this.productsData.filter(x => x.special === special);;
  }
}
