import { ProductRepository } from './services/product-repository.service';
import { Product } from './models/products-models';
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { productsData } from "./config/product.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public specials: Array<Product>;
  public products: Array<Product>;
  public productsData = productsData;

  public search = new FormControl();

  constructor(productRepository: ProductRepository) {
    this.specials = productRepository.getProducts(true);
    this.products = productRepository.getProducts();
  }

  ngOnInit() {
    this.search.valueChanges.subscribe(value => this.searchElement(value.toLowerCase()));
  }

  searchElement(value: string) {
    this.specials = this.productsData.filter(item => this.checkElement(item, value, true));
    this.products = this.productsData.filter(item => this.checkElement(item, value));
  }

  checkElement(item: any, value: string, special = false): boolean {
    for (let val in item) {
      if (val !== 'special' && item[val].toString().toLowerCase().indexOf(value) >= 0 && item.special === special) {
        return true;
      }
    }
    return false;
  }
}
