import { Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProdutService {
  product_list: AngularFireList<any> | any;
  select_product: Product = {
    compania: '',
    consolas: '',
    descripcion: '',
    fecha_lanz: '',
    nombre: '',
  };

  constructor(private firebase: AngularFireDatabase) {}

  getProduct() {
    return (this.product_list = this.firebase.list('products'));
  }

  insertProduct(product: Product) {
    this.product_list?.push({
      compania: product.compania,
      consolas: product.consolas,
      descripcion: product.descripcion,
      fecha_lanz: product.fecha_lanz,
      nombre: product.nombre,
    });
  }

  updateProduct(product: Product) {
    this.product_list?.update(product.key, {
      compania: product.compania,
      consolas: product.consolas,
      descripcion: product.descripcion,
      fecha_lanz: product.fecha_lanz,
      nombre: product.nombre,
    });
  }

  deleteProduct(key: string) {
    this.product_list.remove(key);
  }
}
